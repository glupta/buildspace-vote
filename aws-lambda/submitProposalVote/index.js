const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
const VOTING = "Voting";

const getProposal = async (proposalId) => {
    let params = {
        Key: {
            "proposal_id": proposalId
        },
        TableName: "dao_proposal"
    };

    let result = await docClient.get(params).promise();
    console.log("getProposal", result);
    return result;
};

const updateVote = async (proposalId, userAddress, voteCount) => {
    // let params = {
    //     TableName: "dao_proposal",
    //     Key:{
    //         "proposal_id": proposalId,
    //     },
    //     UpdateExpression: 'SET voter_addresses = list_append(voter_addresses, :userAddress)',
    //     ExpressionAttributeValues:{
    //         ":increase": 1,
    //         ":userAddress": [userAddress]
    //     },
    //     ReturnValues: "UPDATED_NEW"
    // };
    
    let params = {
        TableName: "dao_proposal",
        Key:{
            "proposal_id": proposalId,
        },
        UpdateExpression: 'SET voter_map.#user_address = :vote_count',
        ExpressionAttributeNames:{
            "#user_address": userAddress
        },
        ExpressionAttributeValues:{
            ":vote_count": voteCount
        },
        ReturnValues: "UPDATED_NEW"
    };

    let result = await docClient.update(params).promise();
    console.log("updateVote", result);
    return result;
};

//POST, supply JSON with "proposal_id", "user_address", and "vote_count"
//returns updated proposal json
exports.handler = async (event) => {
    try {
        console.log("Processing:", event);
        var obj = JSON.parse(event.body);
    
        let getProposalResult = await getProposal(obj.proposal_id);
        if (!getProposalResult || !getProposalResult.Item) {
            let response = "Proposal not found or missing data";
            console.error(response, getProposalResult);
            return {
                statusCode: 400,
                body: JSON.stringify(response)
            };
        }

        if (getProposalResult.Item.status != VOTING) {
            let response = "Proposal is not voting, status=" + getProposalResult.Item.status;
            console.error(response);
            return {
                statusCode: 400,
                body: JSON.stringify(response)
            };
        }
        
        // if (getProposalResult.Item.voter_addresses.includes(obj.user_address)) {
        //     let response = "User already voted";
        //     console.error(response);
        //     return {
        //         statusCode: 400,
        //         body: JSON.stringify(response)
        //     };
        // }

        let updateVoteResult = await updateVote(obj.proposal_id, obj.user_address, obj.vote_count);
        updateVoteResult.successful = true;
        return {
            statusCode: 200,
            body: JSON.stringify(updateVoteResult)
        };        
    } catch (error) {
        console.error(error);
        return JSON.stringify(error);
    }
};
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
const VOTING = "Voting";
const DEPLOYED = "Deployed";

exports.handler = async (event) => {
    console.log("Processing", event);
    const params = {
        TableName: "dao_proposal"
    };
    
    let scanResults = [];
    let items;

    do {
        items = await docClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != "undefined");
    
    let userCountTotal = 0;
    let votingResults = [];
    let deployedResults = [];
    
    for (let i = 0; i < scanResults.length; i++) {
        
        let voteCount = 0;
        for (let j in scanResults[i].voter_map) {
            voteCount += scanResults[i].voter_map[j];
        }
        scanResults[i].vote_count = voteCount;
        
        let userCount = 0;
        if (event.queryStringParameters && event.queryStringParameters.address
        && scanResults[i].voter_map.has(event.queryStringParameters.address)) {
            userCount = scanResults[i].voter_map.get(event.queryStringParameters.address);
        }
        scanResults[i].user_count = userCount;
        
        if (scanResults[i].status === VOTING) {
            scanResults[i].status = "🗳 " + VOTING;
            votingResults.push(scanResults[i]);
            userCountTotal += userCount;
        } else if (scanResults[i].status === DEPLOYED) {
            scanResults[i].status = "🚀 " + DEPLOYED;
            deployedResults.push(scanResults[i]);
        }
    }
    
    votingResults.sort((a, b) => (a.vote_count < b.vote_count) ? 1 
    : (a.vote_count === b.vote_count) ? ((a.time_created < b.time_created) ? 1 : -1) : -1 );
    deployedResults.sort((a, b) => (a.time_created < b.time_created) ? 1 : -1);
    let finalResults = votingResults.concat(deployedResults);
    
    let d = new Date();
    d.setDate(d.getDate() + ((7 - d.getDay()) % 7 + 1) % 7);
    d.setHours(0, 0, 0, 0);
    
    let response = {
        results: finalResults,
        user_count: userCountTotal,
        time_expiration: d.getTime()
    };
    console.log("response", response);

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
};

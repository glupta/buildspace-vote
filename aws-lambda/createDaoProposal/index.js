const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

//POST, supply JSON with "title" and "description" as string
//returns inserted params
exports.handler = async (event, context, callback) => {
    try {
        console.log("Processing:", event, context);
        var obj = JSON.parse(event.body);
        const params = {
            Item: {
                proposal_id: context.awsRequestId,
                time_created: Date.now(),
                title: obj.title,
                description: obj.description,
                status: "Voting",
                voter_map: {}
            },
            TableName: "dao_proposal"
        };
    
        await docClient.put(params).promise();
        console.log("Item entered successfully", params);
        const response = {
            statusCode: 200,
            body: params
        };
        callback(null, JSON.stringify(response));
    } catch (error) {
        console.error(error);
        callback(JSON.stringify(error), null);
    }
};
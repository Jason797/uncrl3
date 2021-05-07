var aws = require('aws-sdk')
let ddb = new aws.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    let date = new Date()

    if (event.request.userAttributes.sub) {
        console.log("working")
        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'User'},
                'username': {S: event.userName},
                'email': {S: event.request.userAttributes.email},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString},
            },
            TableName: process.env.USERTABLE
        }
        try {
            await ddb.put(params).promise()
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }
        context.done(null, event)
    } else {
        console.log("Error: Nothing was written to DynamoDB")
        context.done(null, event)
    }
}
exports.handler = async (event) => {
    // TODO implement
    const displayMessage = "Abhishekji Dumala says " + event['queryStringParameters']['keyword'];
    const response = {
        statusCode: 200,
        body: displayMessage
    };
    return response;
};
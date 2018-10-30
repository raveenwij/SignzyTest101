let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://services.dev.fintechmart.online/api-sandbox/application/token`,
        method: 'post',
        query: {},
        headers: { "Accept": "*/*", "Content-Type": "application/json" },
        body: {
            "password": event.password,
            "userName": event.userName
        }
    }).then((response) => {
        // your code goes here
        console.log{response};
    }).catch((err) => {
        // error handling goes here
    });

    callback(null, { "message": "Successfully executed" });
}
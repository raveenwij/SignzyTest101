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
        console.log(response);

        Swagger.http({
            url: `https://api.dev.fintechmart.online/signzynew/2.0/api/v2/patrons/58834495336daf647411278e}/organizations`,
            method: 'post',
            query: {},
            headers: { "X-Authorization": response.access_token, "Accept": "application/json", "Content-Type": "application/json" },
            body: {
                "identifier": "U74900MH2011PTC216800",
                "service": "roc",
                "callbackUrl": "https://signzy.com"
            }
        }).then((response) => {
            // your code goes here
        }).catch((err) => {
            // error handling goes here
        });

    }).catch((err) => {
        // error handling goes here
    });

    callback(null, { "message": "Successfully executed" });
}
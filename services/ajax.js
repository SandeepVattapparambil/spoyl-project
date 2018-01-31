const request = require('request');

let apiServices = (() => {
    let API = {};
    API.AJAX_GET = (url) => {
        return new Promise((resolve, reject) => {
            request.get({
                url: url,
                forever: true,
                gzip: true,
                timeout: 30000
            }, (error, httpResponse, body) => {
                if (!error && (httpResponse && (httpResponse.statusCode === 200))) {
                    try {
                        let response = JSON.parse(body);
                        if (response) {
                            resolve(response);
                        } else {
                            reject(response);
                        }
                    } catch (e) {
                        reject();
                    }
                } else {
                    reject({
                        statusCode: (httpResponse && httpResponse.statusCode)
                    });
                }
            });
        });
    };
    return API;
})();
module.exports = apiServices;

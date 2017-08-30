const request = require('request');

class HTTP {
  static _request(method, url) {
    return new Promise( (resolve, reject)=> {
      request[method](url, (err, response, body) => {
        if (err || response.statusCode !== 200) {
          reject(response);
        }
        resolve(body);
      })
    } );
  }

  static get(url) {
    return HTTP._request('get', url);
  }

  static post(url) {
    return HTTP._request('post', url);
  }
}

module.exports = HTTP;

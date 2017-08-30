const request = require('request');

/**
  HTTP class

  @description
  HTTP class is a promise based handle to make http request to external servers.
*/
class HTTP {
  /**
    Request

    @description
    Peform the request based on URL and method, then returns a promise with
    page's body

    @param {String} method HTTP request method
    @param {String} url URL to be accessed
    @returns {Promise}
  */
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

  /**
    Get

    @description
    Peform the get request to a URL.

    @param {String} url URL to be accessed
    @returns {Promise}
  */
  static get(url) {
    return HTTP._request('get', url);
  }

  /**
    Post

    @description
    Peform the post request to a URL.
    @TODO add support to body data.

    @param {String} url URL to be accessed
    @returns {Promise}
  */
  static post(url) {
    return HTTP._request('post', url);
  }
}

module.exports = HTTP;

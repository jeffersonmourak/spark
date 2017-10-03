const request = require('request');
const _ = require('lodash');
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
  static _request(method, url, data = {}) {
    return new Promise( (resolve, reject)=> {
      let requestSettings = _.defaults({ url }, data);

      request[method](requestSettings, (err, response, body) => {
        if (err || (response.statusCode < 200 && response.statusCode > 299 )) {
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

    @param {String} url URL to be accessed
    @param {Object} body Object with post data
    @param {String} dataType content-type header
    @returns {Promise}
  */
  static post(url, body, dataType = 'application/json') {
    return HTTP._request('post', url, {
      headers: {'content-type' : dataType},
      body: JSON.stringify(body)
    });
  }

  /**
    delete

    @description
    Peform the delete request to a URL.

    @param {String} url URL to be accessed
    @returns {Promise}
  */
  static delete(url) {
    return HTTP._request('delete', url);
  }
}

module.exports = HTTP;

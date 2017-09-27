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

    @param {String} url URL to be accessed
    @param {Object} body_request the body of you request
    @param {Object} data_type the http application used
    @returns {Promise}
  */
  static post(target, body_request, data_type = 'application/json') {

  return new Promise( (resolve, reject)=> {
    request.post({
      headers: {'content-type' : data_type},
      url:     target,
      body:    body_request
    }, function(error, response, body){
          if (!error) {
              resolve(body);
          }
          else {console.log(error)}
    })

  });

  }

}
module.exports = HTTP;

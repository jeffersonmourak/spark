const _ = require('lodash');

class Route {
  constructor(expressApp, url) {
    expressApp.all(url, this._dispatch.bind(this));
  }

  _dispatch(req, res, next) {
    this[`on${_.capitalize(req.method)}`]
    .call(this, req)
    .then((response) => {
      if (_.isObject(response)) {
        res.header('Content-Type', 'application/json');
        return res.send(JSON.stringify(response, null, 4));
      }

      if (_.isString(response)) {
        res.header('Content-Type', 'text/plain')
        return res.send(response);
      }

      if (response !== null) {
        return res.status(500).send('Developer Error');
      }

      if (response === null) {
        return res.status(404).send('404 Not Found');
      }
    });
  }

  async onGet(request) {
    return null;
  }

  async onPost(request) {
    return null;
  }

  async onPut(request) {
    return null;
  }

  async onDelete(request) {
    return null;
  }
}


module.exports = Route;

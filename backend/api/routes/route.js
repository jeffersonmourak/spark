const _ = require('lodash');

class Route {
  /**
    Classe de rota base

    @description
    Essa classe é a base para todas as rotas disponíveis na application

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp, url) {
    expressApp.all(url, this._dispatch.bind(this));
  }

  /**
    _dispatch

    @description
    Função para chamar e retornar as requisições para a URL da rota.
  */
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

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    return null;
  }

  /**
    onPost

    @description
    Função para processamento da rota durante requisções POST

    @returns {Promise}
  */
  async onPost(request) {
    return null;
  }

  /**
    onPut

    @description
    Função para processamento da rota durante requisções PUT

    @returns {Promise}
  */
  async onPut(request) {
    return null;
  }

  /**
    onDelete

    @description
    Função para processamento da rota durante requisções DELETE

    @returns {Promise}
  */
  async onDelete(request) {
    return null;
  }
}


module.exports = Route;

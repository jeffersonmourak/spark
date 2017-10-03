const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      FunctionsModel = require('@models/functions-model');

class FunctionsRoute extends Route {
  /**
    Classe da rota para dados das Obras

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /functions

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/functions')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.functions, FunctionsModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = FunctionsRoute;

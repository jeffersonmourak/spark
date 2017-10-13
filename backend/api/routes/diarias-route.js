const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      DiariasModel = require('@models/diarias-model');

class DiariasRoute extends Route {
  /**
    Classe da rota para dados das Obras

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /diarias

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/diarias')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.diarias, DiariasModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = DiariasRoute;

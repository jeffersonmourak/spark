const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      GastosModel = require('@models/gastos-model');

class GastosRoute extends Route {
  /**
    Classe da rota para dados das Obras

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /gastos

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/gastos')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.gastos, GastosModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = GastosRoute;

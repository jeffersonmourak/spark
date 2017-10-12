const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      ConveniosModel = require('@models/convenios-model');

class ConveniosRoute extends Route {
  /**
    Classe da rota para dados das Convenios

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /convenios

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/convenios')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.convenios, ConveniosModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ConveniosRoute;

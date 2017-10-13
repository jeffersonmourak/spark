const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      ObrasModel = require('@models/obra-model');

class ObrasRoute extends Route {
  /**
    Classe da rota para dados das Obras

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /obras

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/obras')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.builds, ObrasModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ObrasRoute;

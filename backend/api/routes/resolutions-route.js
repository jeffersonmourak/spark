const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      ResolutionsModel = require('@models/resolutions-model');

class ResolutionsRoute extends Route {
  /**
    Classe da rota para dados das Obras

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /resolutions

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/resolutions')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.resolutions, ResolutionsModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ResolutionsRoute;

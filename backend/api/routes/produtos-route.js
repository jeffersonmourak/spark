const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      ProdutosModel = require('@models/produtos-model');

class ProdutosRoute extends Route {
  /**
    Classe da rota para dados das Obras

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /produtos

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/produtos')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.products_extension, ProdutosModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ProdutosRoute;

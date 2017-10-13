const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      TelefonesModel = require('@models/telefones-model');

class TelefonesRoute extends Route {
  /**
    Classe da rota para dados das Telefones

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /telefones

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/telefones')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.telefones, TelefonesModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = TelefonesRoute;

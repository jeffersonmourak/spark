const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      ExtensaoModel = require('@models/extensao-model');

class ExtensaoRoute extends Route {
  /**
    Classe da rota para dados das atividades de extensão

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /atividades-de-extensao

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/atividades-de-extensao')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.extension, ExtensaoModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ExtensaoRoute;

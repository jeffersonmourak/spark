const Route = require('@api/routes/route'),
      ufrn = require('@crawler/ufrn'),
      ServidoresModel = require('@models/servidores-model');

class ServidoresRoute extends Route {
  /**
    Classe da rota para dados dos servidores

    @description
    Essa Class é responsável por gerenciar as requisições para a rota /servidores

    @param {Express} expressApp Aplicação instancia de expressApp
    @param {String} url Url para acesso via HTTP
  */
  constructor(expressApp) {
    super(expressApp, '/servidores')
  }

  /**
    onGet

    @description
    Função para processamento da rota durante requisções GET

    @returns {Promise}
  */
  async onGet(request) {
    let data = await ufrn.getAndProcess(ufrn.urls.people, ServidoresModel)

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ServidoresRoute;

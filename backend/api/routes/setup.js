// ROTAS
const ExtensaoRoute = require('@api/routes/extensao-route'),
      ObrasRoute = require('@api/routes/obras-route'),
      ServidoresRoute = require('@api/routes/servidores-route');

class SetupRoutes {
  /**
    Classe para configurar as rotas da aplicação
  */

  /**
    routes

    Rotas disponíveis na aplicação
  */
  static get routes() {
    return [
      ExtensaoRoute,
      ObrasRoute,
      ServidoresRoute
    ];
  }

  /**
    start

    @description
    Inicializa as rotas da aplicação

    @param {Express} expressApp Aplicação instancia de expressApp
  */
  static start(expressApp) {
    for (let route of SetupRoutes.routes) {
      new route(expressApp);
    }
  }
}

module.exports = SetupRoutes;

const ExtensaoRoute = require('@api/routes/extensao');
const ObrasRoute = require('@api/routes/obras');
const ServidoresRoute = require('@api/routes/servidores');

class SetupRoutes {
  static get routes() {
    return [
      ExtensaoRoute,
      ObrasRoute,
      ServidoresRoute
    ];
  }

  static start(expressApp) {
    for (let route of SetupRoutes.routes) {
      new route(expressApp);
    }
  }
}

module.exports = SetupRoutes;

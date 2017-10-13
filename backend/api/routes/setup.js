// ROTAS
const ExtensaoRoute = require('@api/routes/extensao-route'),
      ObrasRoute = require('@api/routes/obras-route'),
      ServidoresRoute = require('@api/routes/servidores-route'),
      AcervoRoute = require('@api/routes/acervo-route'),
      ContratosRoute = require('@api/routes/contratos-route'),
      GastosRoute = require('@api/routes/gastos-route'),
      GruposRoute = require('@api/routes/grupos-route'),
      PesquisadoresRoute = require('@api/routes/pesquisadores-route'),
      BolsistasRoute = require('@api/routes/bolsistas-route'),
      DiariasRoute = require('@api/routes/diarias-route'),
      PesquisasRoute = require('@api/routes/pesquisas-route'),
      ResolutionsRoute = require('@api/routes/resolutions-route'),
      EditaisRoute = require('@api/routes/editais-route'),
      ProdutosRoute = require('@api/routes/produtos-route'),
      DocentesRoute = require('@api/routes/docentes-route'),
      FunctionsRoute = require('@api/routes/functions-route'),
      posGraduacoesRoute = require('@api/routes/posgraduacoes-route'),
      programasPosGraduacoesRoute = require('@api/routes/programasposgrad-route'),
      cursosRoute = require('@api/routes/cursos-route'),
      conveniosRoute = require('@api/routes/convenios-route'),
      telefonesRoute = require('@api/routes/telefones-route');

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
      ServidoresRoute,
      AcervoRoute, 
      ContratosRoute,
      GastosRoute,
      GruposRoute,
      PesquisadoresRoute,
      BolsistasRoute,
      DiariasRoute,
      PesquisasRoute,
      ResolutionsRoute,
      EditaisRoute,
      ProdutosRoute,
      DocentesRoute,
      FunctionsRoute,
      posGraduacoesRoute,
      programasPosGraduacoesRoute,
      cursosRoute,
      conveniosRoute,
      telefonesRoute
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

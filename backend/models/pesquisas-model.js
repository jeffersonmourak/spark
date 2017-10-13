const Base = require('./base');

class PesquisasModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos projetos de pesquisa da UFRN

    @param {Object} [data] Dado opcional para criar um modelo já preenchido
  */
  constructor(data) {
    super(data);
  }

  /**
    getFields

    @description Retorna os campos disponiveis no modelo
    @static

    @returns {Array}
  */
  static getFields() {
    return [
      'codigoProjeto',
      'titulo',
      'palavrasChave',
      'situacao',
      'ano',
      'dataInicio',
      'dataFim',
      'tipoProjeto',
      'unidade',
      'coordenador',
      'edital',
      'grupoPesquisa',
      'linhaPesquisa',
      'areaConhecimentoCnpq'
    ];
  }
}

module.exports = PesquisasModel;

const Base = require('./base');

class GruposModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos Grupos de pesquisa da UFRN

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
      'codigo',
      'basePesquisa',
      'coordenador',
      'areaConhecimentoCnpq',
      'situacao'
    ];
  }
}

module.exports = GruposModel;

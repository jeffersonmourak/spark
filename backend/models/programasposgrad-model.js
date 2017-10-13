const Base = require('./base');

class ProgramasPosGradModel extends Base {
  /**
    OProgrmasDradModel

    @description
    Esta é a classe de modelo dos dados dos Programas de pós-graduação da UFRN.

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
      'programa',
      'sigla',
      'siglaAcademica'
    ];
  }
}

module.exports = ProgramasPosGradModel;

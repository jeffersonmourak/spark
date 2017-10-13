const Base = require('./base');

class GastosModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos gastos da UFRN

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
      'unidade',
      'naturesaDespesa',
      'valor'
    ];
  }
}

module.exports = GastosModel;

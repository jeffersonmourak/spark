const Base = require('./base');

class ContratosModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos projetos de obras da UFRN

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
      'contrato',
      'contratado',
      'valor',
      'objeto',
      'vencimento'
    ];
  }
}

module.exports = ContratosModel;

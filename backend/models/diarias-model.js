const Base = require('./base');

class DiariasModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados de diárias pagas pela UFRN

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
      'proposto',
      'dataSaida',
      'dataChegada',
      'descricaoServico',
      'valorRecebido'
    ];
  }
}

module.exports = DiariasModel;

const Base = require('./base');

class EditaisModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos editais da UFRN

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
      'numeroEdital',
      'anoEdital',
      'titulo',
      'denominacao'
    ];
  }
}

module.exports = EditaisModel;

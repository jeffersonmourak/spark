const Base = require('./base');

class TelefonesModel extends Base {
  /**
    TelefonesModel

    @description
    Esta é a classe de modelo dos telefones da UFRN.

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
      'unidadeLocalizacao',
      'setor',
      'linhaTelefonica',
      'numero',
      'tipo'
    ];
  }
}

module.exports = TelefonesModel;

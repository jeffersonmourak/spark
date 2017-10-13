const Base = require('./base');

class PesquisadoresModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos pesquisadores da UFRN

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
      'idServidor',
      'nome',
      'unidade',
      'centro',
      'coordenador',
      'internos',
      'externos'
    ];
  }
}

module.exports = PesquisadoresModel;

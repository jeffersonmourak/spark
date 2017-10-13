const Base = require('./base');

class ServidoresModel extends Base {
  /**
    ServidoresModel

    @description
    Esta é a classe de modelo dos dados dos projetos de servidores da UFRN

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
      'siape',
      'digitoSiape',
      'nome',
      'categoria',
      'cargo',
      'tipoJornadaTrabalho',
      'tipoRegimeJuridico',
      'situacaoServidor',
      'classeFuncional',
      'idUnidade',
      'unidade',
      'admissao',
      'dataDesligamento'
    ];
  }
}

module.exports = ServidoresModel;

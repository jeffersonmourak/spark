const Base = require('./base');

class DocentesModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos docentes da UFRN

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
      'nome',
      'formacao',
      'tipoJornadaTrabalho',
      'vinculo',
      'categoria',
      'classeFuncional',
      'idUnidadeLotacao',
      'lotacao',
      'admissao'
    ];
  }
}

module.exports = DocentesModel;

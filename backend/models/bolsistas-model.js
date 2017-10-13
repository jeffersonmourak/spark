const Base = require('./base');

class BolsistasModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos bolsistas de iniciação cientifica da UFRN

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
      'matricula',
      'discente',
      'titulo',
      'codigoProjeto',
      'ano',
      'orientador',
      'categoria',
      'tipoDeBolsa',
      'linhaPesquisa',
      'basePesquisa',
      'cota',
      'inicio',
      'fim',
      'unidade',
      'status'
    ];
  }
}

module.exports = BolsistasModel;

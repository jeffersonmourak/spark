const Base = require('./base');

class ObrasModel extends Base {
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
      'descricao',
      'periodo',
      'qtdDias',
      'licitacao',
      'empresa',
      'modalidade',
      'valor',
      'fonteRecurso',
      'vigenciaProjeto',
      'projeto'
    ];
  }
}

module.exports = ObrasModel;

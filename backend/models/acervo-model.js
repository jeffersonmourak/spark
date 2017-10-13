const Base = require('./base');

class AcervoModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados do acervo das bibliotecas

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
      'idExemplar',
      'titulo',
      'quantidadeMateriaisAtivosTitulo',
      'biblioteca'
    ];
  }
}

module.exports = AcervoModel;

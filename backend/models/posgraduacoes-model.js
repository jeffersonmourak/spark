const Base = require('./base');

class posGraduacoesModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos cursos de pós graduação da UFRN

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
      'nome',
      'sede',
      'nivelEnsino',
      'modalidadeEducacao',
      'programa',
      'tipoOferta',
      'areaConhecimento',
      'portaria',
      'conceito',
      'situacaoCurso',
      'coordenador'
    ];
  }
}

module.exports = posGraduacoesModel;

const Base = require('./base');

class CursosModel extends Base {
  /**
    CursosModel

    @description
    Relação de cursos de ensino infantil, técnico e técnico integrado, nível médio,
    graduação, lato sensu, stricto sensu, residência, formação complementar, mestrado e doutorado oferecidos pela UFRN

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
      'municipio',
      'convenioAcademico',
      'grauAcademico',
      'modalidadeEducacao',
      'unidadeResponsavel',
      'tipoOferta',
      'areaConhecimento',
      'dataFuncionamento',
      'codigoInep',
      'dou',
      'portariaReconhecimento',
      'situacaoCurso',
      'coordenador'
    ];
  }
}

module.exports = CursosModel;

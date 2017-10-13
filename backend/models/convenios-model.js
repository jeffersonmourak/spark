const Base = require('./base');

class ConveniosModel extends Base {
  /**
    ObrasModel

    @description
    Relação dos convênios vigentes da UFRN

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
      'numeroProjeto',
      'numero',
      'ano',
      'numeroRegistro',
      'tituloProjeto',
      'vigencia',
      'valor',
      'identificadorObjeto',
      'processo',
      'numeroCadastro',
      'anoCadastro',
      'tipoProjeto',
      'situacao',
      'descriçãoSituacao',
      'permiteEfetivacao'
    ];
  }
}

module.exports = ConveniosModel;

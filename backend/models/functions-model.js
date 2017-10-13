const Base = require('./base');

class FunctionsModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo da relação das funções gratificadas de servidores da UFRN

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
      'siape',
      'nome',
      'idServidor',
      'situacaoServidor',
      'lotacao',
      'sigla',
      'inicio',
      'fim',
      'idUnidade',
      'unidadeDesignacao',
      'atividade',
      'observacoes'
    ];
  }
}

module.exports = FunctionsModel;

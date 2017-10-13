const Base = require('./base');

class ExtensaoModel extends Base {
  /**
    ExtensaoModel

    @description
    Esta é a classe de modelo dos dados dos projetos de extensão da UFRN

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
      'ano',
      'tipo_atividade',
      'titulo',
      'data_inicio',
      'data_fim',
      'coordenador',
      'area_tematica',
      'situacao',
      'tipo_projeto',
      'bolsas_solicitadas',
      'bolsas_concedidas',
      'publico_interno',
      'bolsas_edital',
      'numero_edital',
      'edital',
      'municipio'
    ];
  }
}

module.exports = ExtensaoModel;

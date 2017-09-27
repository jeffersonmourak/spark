const Base = require('./base');

class Extenstions extends Base {
  constructor(data) {
    let fields = [
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
    super(fields, data);
  }
}

module.exports = Extenstions;

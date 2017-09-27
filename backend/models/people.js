const Base = require('./base');

class People extends Base {
  constructor(data) {
    let fields = [
      'idServidor',
      'siape',
      'digitoSiape',
      'nome',
      'categoria',
      'cargo',
      'tipoJornadaTrabalho',
      'tipoRegimeJuridico',
      'situacaoServidor',
      'classeFuncional',
      'idUnidade',
      'unidade',
      'admissao',
      'dataDesligamento'
    ];
    super(fields, data);
  }
}

module.exports = People;

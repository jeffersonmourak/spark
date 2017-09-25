const Base = require('./base');

class Builds extends Base {
  constructor(data) {
    let fields = [
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
    super(fields, data);
  }
}

module.exports = Builds;

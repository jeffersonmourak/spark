const Base = require('./base');

class ProdutosModel extends Base {
  /**
    ObrasModel

    @description
    Esta é a classe de modelo dos dados dos produtos de extenção da UFRN

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
      'titulo',
      'produtoGerado',
      'tiragem',
      'situacao',
      'tipoProjeto',
      'tipoProduto',
      'ano',
      'dataInicio',
      'dataFim',
      'unidade',
      'formaProjeto',
      'areaPrincipal',
      'areaConhecimentoCnpq',
      'quantidadeDiscente',
      'publicoEstimado',
      'bolsasConcedidas'
    ];
  }
}

module.exports = ProdutosModel;

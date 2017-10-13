const _ = require('lodash');

class Base {
  /**
    Model Base class

    @description
    Essa é a classe base para todos os modelos de dados concedidos nos dados abertos da UFRN

    @param {Object} [data] Dado opcional para criar um modelo já preenchido
  */
  constructor(data) {
    if (data) {
      this.set(data);
    }
  }

  /**
    Set

    @description Adiciona os dados do modelos

    @param {Object} data Dados da model
  */
  set(data) {
    _.mapValues(data, (value, key) => {
      if (_.includes(this.getFields(), key)) {
        this[key] = value;
      }
    });
  }

  /**
    Get

    @description Retorno dos dados dentro da model

    @returns {Object}
  */
  get() {
    return _.reduce(this.getFields(), (model, field) => {
      model[field] = this[field];
      return model;
    }, {});
  }

  /**
    getFields

    @description Retorna os campos disponiveis no modelo

    @returns {Array}
  */
  getFields() {
    return this.constructor.getFields();
  }

  /**
    getFields

    @description Retorna os campos disponiveis no modelo
    @static

    @returns {Array}
  */
  static getFields() {
    return [];
  }
}


module.exports = Base;

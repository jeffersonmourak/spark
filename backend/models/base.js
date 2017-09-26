const _ = require('lodash');

class Base {
  constructor(fields = [], data) {
    this.fields = fields;
    if (data) {
      this.set(data);
    }
  }

  set(data) {
    _.mapValues(data, (value, key) => {
      if (_.includes(this.fields, key)) {
        this[key] = value;
      }
    });
  }

  get() {
    return _.reduce(this.getFields(), (model, field) => {
      model[field] = this[field];
      return model;
    }, {});
  }

  getFields() {
    return this.fields;
  }
}


module.exports = Base;

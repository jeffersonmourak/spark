const HTTP = require('@core/http');

class data_base {

  /**
    insert

    @description
    Insert a element on database

    @param {String} category The catecory of the element
    @param {String} type the subcategory of the element
    @param {Object} The object to insert
    @returns {boolean}
  */
  static insert(category, type, element) {
    const url = 'http://elastic.spark.dev';
    return HTTP.post(url+'/'+category+'/'+type, JSON.stringify(element));
  }

}

module.exports = data_base;

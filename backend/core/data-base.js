const HTTP = require('@core/http');
const Screen = require('@core/screen');

class DataBase {
  static get url() {
    return 'http://elastic.spark.dev';
  }
  /**
    insert

    @description
    Insert a element on database

    @param {String} category The catecory of the element
    @param {String} type the subcategory of the element
    @param {Object} The object to insert
    @returns {boolean}
  */
  static insert(type, element) {
    return HTTP.post(`${DataBase.url}/ufrn_${type}/${type}`, element);
  }

  static async insertAll(type, elements) {
    let i = 1;
    for (let element of elements) {
      try {
        Screen.progressMessage(`Adding ${i} of ${elements.length}`, Screen.colors.foreground.green);
        await DataBase.insert(type, element);
      } catch (e) {
        Screen.breakLine();
        Screen.printError(e);
        return e;
      }
      i++;
    }
    Screen.breakLine();
  }
}

module.exports = DataBase;

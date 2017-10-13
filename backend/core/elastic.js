const HTTP = require('@core/http'),
      Screen = require('@core/screen');

class Elastic {
  static get url() {
    return 'http://elastic.spark.dev';
  }

  static urlFactory(type) {
    return `${Elastic.url}/ufrn_${type}/${type}`;
  }

  /**
    insert

    @description
    Insere um elemento no banco de dados

    @param {String} type Categoria do dado
    @param {Object} element Elemento a ser adicionado
    @returns {Promise}
  */
  static insert(type, element) {
    return HTTP.post(Elastic.urlFactory(type), element);
  }

  /**
    insertAll

    @description
    Insere um elemento no banco de dados

    @param {String} type Categoria do dado
    @param {Array} elements Elementos a serem adicionados
    @returns {Promise}
  */
  static async insertAll(type, elements) {
    let i = 1;
    for (let element of elements) {
      try {
        Screen.progressMessage(`Adding ${i} of ${elements.length}`, Screen.colors.foreground.green);
        await Elastic.insert(type, element);
      } catch (e) {
        Screen.breakLine();
        Screen.printError(e);
        return e;
      }
      i++;
    }
    Screen.breakLine();
  }

  async clearCategory(category) {
    return HTTP.delete(`${Elastic.url}/ufrn_${category}`);
  }
}

module.exports = Elastic;

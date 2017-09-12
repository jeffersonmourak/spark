const _ = require('lodash');

class CSV {
  static get regex() {
    return {
      string: /\"(.*)\"/g,
      camel: /_(\S)/g
    };
  }

  static getLines(fileString) {
    var lines = fileString.split('\n');
    lines.shift();
    return lines.join('');;
  }

  static camelfy(string) {
    if(string === undefined) return;

    let matches = string.match(CSV.regex.camel);
    if (matches !== null) {
      matches.forEach( key => {
        let letter = key[1].toUpperCase();
        string = string.replace(key, letter);
      } );
    }

    return string;
  }

  static getHeads(text) {
    var firstLine = text.split('\n').shift();
    var vector = firstLine.split(';').map(key => {
      let match = new RegExp(CSV.regex.string).exec(key);

      if (match === null) {
        return;
      }
      key = CSV.camelfy(match[1]);

      return key;
    });

    var vector_final = [];
    for(var loop = 0; loop < Object.keys(vector).length-1; loop++)
      vector_final[loop] = vector[loop];

    return vector_final;
  }

  /**
    extract

    @description
    Extract the csv elements

    @param {String} text The text os body
    @param {String} heads vector containing header
    @returns {Object}
  */
  static extract(text, heads) {

      var vector = text.split(';');

      var vector_final = vector.map(data => {
        let matchData = new RegExp(CSV.regex.string).exec(data);
        if (matchData !== null) {
          data = matchData[1];
        }
        return data;
      });

      var object_extracted = [];
      var n_elements = 0;
      for(var loop = 0; loop < Object.keys(vector_final).length-1;) {

        object_extracted[n_elements] = {};

        for(var internal_loop = 0; internal_loop < Object.keys(heads).length; internal_loop++) {
          object_extracted[n_elements][heads[internal_loop]] = vector_final[loop];
          loop++;
        }

        n_elements++;
      }

      return object_extracted;
  }

}

module.exports = CSV;

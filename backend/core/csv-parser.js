const _ = require('lodash'),
      Base = require('@models/base'),
      base = new Base([]);

class CSV {
  static get regex() {
    return {
      string: /\"(.*)\"/g,
      field: /(\"([\s\S]*?)\"(;|\r|\n))/g,
      camel: /_(\S)/g
    };
  }

  static getLines(fileString, model = base) {
    let fields = model.getFields(),
        lineRegex = new RegExp('(\\"(?:[\\s\\S]*?)\\"[\\r|\\n|;]){'+(fields.length)+'}', 'g');

    return fileString.match(lineRegex);
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

  /**
    Parse Line Value

    @description
    Extract strings from CSV

    @param {Array} line Line from CSV
    @returns {Array}
  */
  static parseLineValue(line) {
    return _.map(line.match(CSV.regex.field), data => {
      let matchData = new RegExp(CSV.regex.string).exec(data);

        if (matchData !== null) {
          data = matchData[1];
        }
      return data.replace(/\s{2,}/g, ' '); // remove espaços em branco desnescesários
    });
  }

  /**
    Extract line data

    @description
    Extract columns object from each line

    @param {Array} line Line from CSV
    @param {Array} heads Array of names for each column
    @returns {Array}
  */
  static extractLine(line, model) {
    let dataModel = new model();
    let heads = dataModel.getFields();
    let data = _.reduce(CSV.parseLineValue(line), (ac ,val, key) => {
      if (heads[key]) {
        ac[heads[key]] = val;
      }
      return ac;
    }, {});

    dataModel.set(data);
    return dataModel;
  }

  /**
    extract

    @description
    Extract the csv elements

    @param {Array} elements The text os body
    @param {String} heads vector containing header
    @returns {Object}
  */
  static extract(lines, model) {
    return _.reduce(lines, (parsed, line) => {
          parsed.push(CSV.extractLine(line, model));
      return parsed;
    } ,[]);
  }

}

module.exports = CSV;

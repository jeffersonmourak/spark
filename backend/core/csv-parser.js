const _ = require('lodash');
const Base = require('@models/base');
const base = new Base([]);

class CSV {
  static get regex() {
    return {
      string: /\"(.*)\"/g,
      field: /(\"([\s\S]*?)\"\;)/g,
      camel: /_(\S)/g
    };
  }

  static getLines(fileString, model = base) {
    let fields = model.getFields(),
        lineRegex = new RegExp('(\\"([\\s\\S]*?)\\"\\;){' + fields.length + '}', 'g');

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

  static getHeads(text) {
    var firstLine = text.split('\n').shift();

    var vector = firstLine.split(';').map(key => {
      let match = new RegExp(CSV.regex.string).exec(key);

      if (match === null) {
        return CSV.camelfy(key);
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
    Parse Line Value

    @description
    Extract strings from CSV

    @param {Array} line Line from CSV
    @returns {Array}
  */
  static parseLineValue(line) {
    debugger;
    return _.map(line.match(CSV.regex.field), data => {
      let matchData = new RegExp(CSV.regex.string).exec(data);

        if (matchData !== null) {
          data = matchData[1];
        }
      return data;
    })
  }

  /**
    Extract line data

    @description
    Extract columns object from each line

    @param {Array} line Line from CSV
    @param {Array} heads Array of names for each column
    @returns {Array}
  */
  static extractLine(line, heads) {
    return _.reduce(CSV.parseLineValue(line), (ac ,val, key) => {
      if (heads[key]) {
        ac[heads[key]] = val;
      }
      return ac;
    }, {});
  }

  /**
    extract

    @description
    Extract the csv elements

    @param {Array} elements The text os body
    @param {String} heads vector containing header
    @returns {Object}
  */
  static extract(lines, heads) {
    return _.reduce(lines, (parsed, line) => {
          parsed.push(CSV.extractLine(line, heads));
      return parsed;
    } ,[]);
  }

}

module.exports = CSV;

const _ = require('lodash');

class CSV {
  static get regex() {
    return {
      string: /\"(\S+)\"/g,
      camel: /_(\S)/g
    };
  }

  static getLines(fileString) {
    return fileString.split('\n');
  }

  static camelfy(string) {
    let matches = string.match(CSV.regex.camel);
    if (matches !== null) {
      matches.forEach( key => {
        let letter = key[1].toUpperCase();
        string = string.replace(key, letter);
      } );
    }

    return string;
  }

  static getHeads(fistLine) {
    return fistLine.split(';').map(key => {
      let match = new RegExp(CSV.regex.string).exec(key);

      if (match === null) {
        return;
      }
      key = CSV.camelfy(match[1]);

      return key;
    });
  }

  static extract(lines, heads) {

    return lines.map(line => {
      line = line.split(';');
      console.log("#####");
      line.map(data => {
        console.log(data);
      });
    })
  }
}

module.exports = CSV;

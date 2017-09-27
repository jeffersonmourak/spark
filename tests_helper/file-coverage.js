const fs = require('fs'),
      path = require('path'),
      _ = require('lodash');

class FileCoverage {
    constructor() {
      this.backendDir = path.join(__dirname, '..', 'backend');
      this.ignore = ['node_modules', 'mochawesome-report', 'tests_helper'];

      console.log(`Checking tests structure for ${this.backendDir}`);
      this.readDir(this.backendDir);
    }

    isJS(file) {
      let dotsStop = _.takeRight(file.split('.'), 2);

      return dotsStop[0] !== 'spec' && dotsStop[1] === 'js';
    }

    thereIsTest(filePath) {
      filePath = filePath.replace('.js', '.spec.js');

      try {
        fs.statSync(filePath);
        return true
      } catch(e) {
        return false;
      }
    }

    readDir(readPath) {
      fs.readdirSync(readPath).forEach(file => {
        if (!_.includes(this.ignore, file)) {
          let filePath = path.join(readPath, file);

          if (fs.statSync(filePath).isDirectory()) {
            this.readDir(filePath);
          }

          // if (this.isJS(file) && !this.thereIsTest(filePath)) {
          //   throw new Error(`Missing file test for ${filePath}`);
          //   exit(1);
          // }
        }
      })
    }
}

new FileCoverage();

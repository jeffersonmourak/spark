require('module-alias/register');

const apiExpose = require('@test/api-expose');
const CSV = require('@core/csv-parser');
const _ = require('lodash');

class TestTarget {
  constructor(classFn, options) {
    this.class = classFn;
    this.exposed = options.exposed || {};
    this.tests = options.tests || {};

    this.regex = {
      STRIP_COMMENTS: /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      ARGUMENT_NAMES: /([^\s,]+)/g
    };

    this.test();
  }

  _getParamNames(func) {
    var fnStr = func.toString().replace(this.regex.STRIP_COMMENTS, '');
    var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(this.regex.ARGUMENT_NAMES);
    if(result === null)
       result = [];
    return result;
  }

  _getTestableMethods() {
    return _.reduce(this.exposed, (arr, method, key) => {
      if ( method === 'function' ) {
        arr.push(key);
      };
      return arr;
    }, []);
  }

  _skip(value) {
    let who = value === 'skip' ? 'Developer' : 'System'
    it.skip(`${who} skiped this test`);
  }

  testMethods() {
    let testableMethods = this._getTestableMethods();

    for(let method of testableMethods) {
      let args = this._getParamNames(this.class[method]).join(', '),
          fn = _.includes(['skip', undefined], this.tests[method])
          ? _.partial(this._skip, this.tests[method])
          : this.tests[method];

      describe(`${method}(${args})`, fn);
    }
  }

  testMethodsCoverage() {
    let testableMethods = this._getTestableMethods();
    for(let method of testableMethods) {
      it(`Should have test defined for ${method}`, () => {
        if(!_.get(this.tests, method)) {
          throw new Error(`There's no test for ${method}`);
        }

        expect(_.get(this.tests, method)).not.to.be(undefined);
      });
    }
  }

  testExposition() {
    it('expose api', () => {
      expect(apiExpose(this.class, this.exposed)).to.be(true);
    });
  }

  test() {
    describe(this.class.name, () => {
      this.testExposition();
      this.testMethodsCoverage();
      this.testMethods();
    });
  }
}

module.exports = TestTarget;

const CSV = require('@core/csv-parser');

new TestTarget(CSV, {
  exposed: {
    regex: {
      string: 'regexp',
      camel: 'regexp'
    },
    getLines: 'function',
    camelfy: 'function',
    getHeads: 'function',
    extract: 'function',
    parseLineValue: 'function',
    extractLine: 'function'
  },
  tests: {
    getLines: () => {
      it('should split the lines', () => {
          let data = ['hello', 'world'],
              str = 'hello\nworld';
          expect(_.isEqual(CSV.getLines(str), data)).to.be(true);
      });
    },
    camelfy: 'skip',
    getHeads: 'skip',
    extract: 'skip',
    parseLineValue: 'skip',
    extractLine: 'skip'
  }
});

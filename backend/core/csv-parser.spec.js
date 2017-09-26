const CSV = require('@core/csv-parser');

new TestTarget(CSV, {
  exposed: {
    regex: {
      string: 'regexp',
      field: 'regexp',
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
          let data = ['"hello";"world";', '"other line";"other value";'],
              str = '"hello";"world";\n"other line";"other value";',
              model = {
                getFields: () => {
                  return ['hello', 'world'];
                }
              };

          expect(_.isEqual(CSV.getLines(str, model), data)).to.be(true);
      });
    },
    camelfy: () => {
      let strings = ['hello_world', 'asd_asd', 'A_house_of_cards', 'Java_script', 'c_plus_plus'],
          cStrings = ['helloWorld', 'asdAsd', 'AHouseOfCards', 'JavaScript', 'cPlusPlus'];

      strings.forEach( (string, index) => {
        let cString = cStrings[index];

        it(`${string} should return ${cString}`, () => {
          expect(CSV.camelfy(string)).to.be(cString);
        });
      });
    },
    getHeads: () => {
      let textString;
      beforeEach(() => {
        textString = 'a;b;c;d;\naa;bb;cc;dd;';
      });
      it('Should get the first line', () => {
        let expectedArray = ['a', 'b', 'c', 'd'];

        expect(_.isEqual(CSV.getHeads(textString), expectedArray)).to.be(true);
      });

      it('Should get the first line with camelCase', () => {
        textString = 'a_a;b_b;c_c;d_d;\naa;bb;cc;dd;';
        let expectedArray = ['aA', 'bB', 'cC', 'dD'];

        expect(_.isEqual(CSV.getHeads(textString), expectedArray)).to.be(true);
      });

      it('Should get the first line with even when between ""', () => {
        textString = '"a_a";"b_b";"c_c";"d_d";\naa;bb;cc;dd;';
        let expectedArray = ['aA', 'bB', 'cC', 'dD'];

        expect(_.isEqual(CSV.getHeads(textString), expectedArray)).to.be(true);
      });
    },
    extract: () => {
      let csvString, heads, lines;
      beforeEach(() => {
        lines = [
          '"hello_world";"value_one";"value_two";',
          '"hi world";"value1";"value2";',
          '"hei verden";"verdi en";"verdi to";',
          '"ola mundo";"valor um";"valor dois";',
        ];
        csvString = lines.join('\n');
        let model = {
          getFields: () => {
            return ['helloWorld', 'valueOne', 'valueTwo'];
          }
        };
        lines = CSV.getLines(csvString, model);
        heads = ['helloWorld', 'valueOne', 'valueTwo'];

      });

      it('should return a array', () => {
        let expectedArray = [
          { helloWorld: 'hello_world',
            valueOne: 'value_one',
            valueTwo: 'value_two' },
          { helloWorld: 'hi world',
            valueOne: 'value1',
            valueTwo: 'value2' },
          { helloWorld: 'hei verden',
            valueOne: 'verdi en',
            valueTwo: 'verdi to' },
          { helloWorld: 'ola mundo',
            valueOne: 'valor um',
            valueTwo: 'valor dois' }
        ];

       expect(_.isEqual(CSV.extract(lines, heads), expectedArray)).to.be(true);
      });
    },
    parseLineValue: () => {
      let lines = [
        '"hello_world"; "value_one"; "value_two";',
        '"hi world"; "value1"; "value2";',
        '"hei verden"; "verdi en"; "verdi to";',
        '"ola mundo"; "valor um"; "valor dois";',
      ], expectedLine = [
        'hello_world;value_one;value_two'.split(';'),
        'hi world;value1;value2'.split(';'),
        'hei verden;verdi en;verdi to'.split(';'),
        'ola mundo;valor um;valor dois'.split(';'),
      ]

      lines.forEach( (line, index) => {
        it(`Should parse line ${index + 1}`, () => {
          expect(_.isEqual(CSV.parseLineValue(line), expectedLine[index])).to.be(true);
        });
      });
    },
    extractLine: () => {
        let csvString, heads;

        let lines = [
          '\"hello_world\";\"value_one\";\"value_two\";',
          '\"hi world\";\"value1\";\"value2\";',
          '\"hei verden\";\"verdi en\";\"verdi to\";',
          '\"ola mundo\";\"valor um\";\"valor dois\";',
        ];
        csvString = lines.join('\n');
        let model = {
          getFields: () => {
            return ['helloWorld', 'valueOne', 'valueTwo'];
          }
        }

        lines = CSV.getLines(csvString, model);
        heads = CSV.getHeads(csvString);

        let expectedArray = [
            {
              helloWorld: 'hello_world',
              'valueOne': 'value_one',
              'valueTwo': 'value_two'
            },
            {
              helloWorld: 'hi world',
              'valueOne': 'value1',
              'valueTwo': 'value2'
            },
            {
              helloWorld: 'hei verden',
              'valueOne': 'verdi en',
              'valueTwo': 'verdi to'
            },
            {
              helloWorld: 'ola mundo',
              'valueOne': 'valor um',
              'valueTwo': 'valor dois'
            }
         ];
        lines.forEach( (line, index) => {
            it(`Should extract line ${index + 1}`, () => {
              expect(_.isEqual(CSV.extractLine(line, heads), expectedArray[index])).to.be(true);
            });
        });
    }
  }
});

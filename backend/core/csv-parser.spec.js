require('module-alias/register');

const expect = require('expect.js'),
      CSV = require('./csv-parser'),
      apiExpose = require('@test/api-expose');

describe('csv-parser', () => {
  it('expose api', () => {
    let exposedApi = {
      regex: 'object',
      getLines: 'function',
      camelfy: 'function',
      getHeads: 'function',
      extract: 'function'
    };

    expect(apiExpose(CSV, exposedApi)).to.be(true);
  });
});

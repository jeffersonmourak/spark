const CSV = require('@crawler/ufrn');

new TestTarget(CSV, {
  exposed: {
    urls: 'object',
    acquire: 'function',
    _getPage: 'function',
    _downloadFile: 'function'
  },
  tests: {
    acquire: 'skip',
    _getPage: 'skip',
    _downloadFile: 'skip'
  }
});

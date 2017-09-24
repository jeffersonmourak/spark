require('module-alias/register');

function toBeResolved(promise) {
  promise.then(() => {
    expect(true).to.be(true);
  })
  .catch(() => {
    expect(false).to.be(true);
  });
}

function toBeRejected(promise) {
  promise.then(() => {
    expect(true).to.be(false);
  })
  .catch(() => {
    expect(true).to.be(true);
  });
}

// Global function for tests
global.apiExpose = require('@test/api-expose');
global.TestTarget = require('@test/target');
global.expect = require('expect.js');
global._ = require('lodash');
global.sinon = require('sinon');
global.helper = {
  promise: {
    toBeResolved,
    toBeRejected
  }
}

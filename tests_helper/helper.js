require('module-alias/register');

// Global function for tests
global.apiExpose = require('@test/api-expose');
global.TestTarget = require('@test/target');
global.expect = require('expect.js');
global._ = require('lodash');

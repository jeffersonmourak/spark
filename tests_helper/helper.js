require('module-alias/register');

global.apiExpose = require('@test/api-expose');
global.TestTarget = require('@test/target');
global.expect = require('expect.js');
global._ = require('lodash');

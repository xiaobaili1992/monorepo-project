'use strict';

const commonUtil = require('..');
const assert = require('assert').strict;

assert.strictEqual(commonUtil(), 'Hello from commonUtil');
console.info('commonUtil tests passed');

#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculate round number', function () {
  it('test round up', function() {
    assert.equal(calculateNumber(3.5, 1), 5);
  });

  it('test round down', function() {
    assert.equal(calculateNumber(3.4, 1), 4);
  });

  it('only first argument passed', function() {
    assert.ok(!calculateNumber(3.4));
  });

  it('first argument number and second argument string', function() {
    assert.ok(!calculateNumber(4, 'four'));
  });

  it('No argument passed', function() {
    assert.ok(!calculateNumber());
  });

  it('first argument rounded', function() {
    assert.equal(calculateNumber(3.7, 3.8), 8);
  });

  it('second argument rounded down', function() {
    assert.equal(calculateNumber(3, 3.4), 6);
  });

  it('first argument rounded up second argument rounded down', function() {
    assert.equal(calculateNumber(8.6, 7.2), 16);
  });
})

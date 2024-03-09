#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test type === "SUM"', function() {
  it('first argument rounded', function() {
    assert.equal(calculateNumber('SUM', 0.1, 4), 4);
  })

  it('second argument rounded', function() {
    assert.equal(calculateNumber('SUM', 4, 0.1), 4);
  })

  it('both argument rounded', function() {
    assert.equal(calculateNumber('SUM', 3.2, 2.2), 5);
  })

  it('first argument rounded up', function() {
    assert.equal(calculateNumber('SUM', 3.6, 2), 6);
  })

  it('second argument rounded up', function() {
    assert.equal(calculateNumber('SUM', 2, 3.6), 6);
  })

  it('both argument rounded to zero', function() {
    assert.equal(calculateNumber('SUM', 0.3, 0.4), 0);
  })
})

describe('Test type === "SUBTRACT"', function() {
  it('first argument rounded', function() {
    assert.equal(calculateNumber('SUBTRACT', 0.1, 4), -4);
  })

  it('second argument rounded', function() {
    assert.equal(calculateNumber('SUBTRACT', 4, 0.1), 4);
  })

  it('both argument rounded', function() {
    assert.equal(calculateNumber('SUBTRACT', 3.2, 2.2), 1);
  })

  it('first argument rounded up', function() {
    assert.equal(calculateNumber('SUBTRACT', 3.6, 2), 2);
  })

  it('second argument rounded up', function() {
    assert.equal(calculateNumber('SUBTRACT', 2, 3.6), -2);
  })

  it('both argument rounded to zero', function() {
    assert.equal(calculateNumber('SUBTRACT', 0.3, 0.4), 0);
  })
})

describe('Test type === "DIVIDE"', function() {
  it('first argument rounded', function() {
    assert.equal(calculateNumber('DIVIDE', 0.1, 4), 0);
  })

  it('second argument rounded', function() {
    assert.equal(calculateNumber('DIVIDE', 4, 0.1), 'Error');
  })

  it('both argument rounded', function() {
    assert.equal(calculateNumber('DIVIDE', 3.2, 2.2), 1.5);
  })

  it('first argument rounded up', function() {
    assert.equal(calculateNumber('DIVIDE', 3.6, 2), 2);
  })

  it('second argument rounded up', function() {
    assert.equal(calculateNumber('DIVIDE', 2, 3.6), 0.5);
  })

  it('both argument rounded to zero', function() {
    assert.equal(calculateNumber('DIVIDE', 0.3, 0.4), 'Error');
  })
})

describe('calculateNumber', () => {
  describe('when type is SUBTRACT', () => {
    it('it round the first argument', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.0, 0), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.3, 0), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.7, 0), 2);
    });

    it('it round the second argument', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 1.0), -1);
      assert.equal(calculateNumber('SUBTRACT', 0, 1.3), -1);
      assert.equal(calculateNumber('SUBTRACT', 0, 1.7), -2);
    });

    it('it should return the right number', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.3, 0), 1);
      assert.equal(calculateNumber('SUBTRACT', 0, 1.2), -1);
      assert.equal(calculateNumber('SUBTRACT', 1.3, 1.3), 0);
      assert.equal(calculateNumber('SUBTRACT', 1.7, 1.2), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.3, 1.8), -1);
      assert.equal(calculateNumber('SUBTRACT', 1.6, 1.8), 0);
    });
  });
});

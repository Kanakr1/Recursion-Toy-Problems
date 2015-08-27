
var mocha = require('mocha'); //access the mocha library
var expect = require('chai').expect; //access to the chai function expect
var deepEquals = require('./deepEquals.js'); //way to install my deepEquals file

describe('deepEquals',function() {
  //organises the test

  it('should compare two simple objects', function() {
    expect(deepEquals({a: true},{a: true})).to.equal(true);
    expect(deepEquals({a: true}, {a: true, b:'tacha'})).to.equal(false);
    expect(deepEquals({a: true, b:'tacha'}, {a: true})).to.equal(false);
  });

  it('shoud compare two simple arrays', function() {
    expect(deepEquals([1, 2, 3, 4], [1, 2, 3, 4])).to.equal(true);
    expect(deepEquals([1, 2, 3, 4], [1, 2, 3, 4, 5])).to.equal(false);
    expect(deepEquals([1, 2, 3, 4,5], [1, 2, 3, 4])).to.equal(false);
  });

  it('should compare two arrays containing objects', function() {
    expect(deepEquals([1, 2, 3, 4, {a: 2}], [1, 2, 3, {a: 2}])).to.equal(false);
    expect(deepEquals([1, 2, 3, 4, {a: 5}], [1, 2, 3, {a: 2}])).to.equal(false);
    expect(deepEquals([1, 2, 3, 4, {foo: 2}], [1, 2, 3, {a: 2}])).to.equal(false);
  });

  it('should compare two nastily nested arrays and objects', function() {
    expect(deepEquals( [{a:1,b:[1,2,3]}],  [{a:1,b:[1,2,3]}] )).to.equal(true);
    expect(deepEquals( [{a:1,b:[1,2,3]}, [null] ], [{a:1,b:[1,2,3]}] )).to.equal(false);
    expect(deepEquals( [{a:1,b:[1,2,3]}, {a:{b:2}, c:[1,2,3]} ], [{a:1,b:[1,2,3]}, {a:{b:2}, c:[1,2,3]} ] )).to.equal(true);
    expect(deepEquals( [{a:1,b:[1,2,3]}, {a:{b:2}, c:[1,2,3]} ], [{a:1,b:[1,2,3]}, {a:{b:2}, c:[1,2,3]}, ['anna','loves','icecream'] ] )).to.equal(false);
  });

});

//mocha deepEquals.js in terminal to run the tests :)


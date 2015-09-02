
var mocha = require('mocha'); //access the mocha library
var expect = require('chai').expect; //access to the chai function expect
var phoneNumbers = require('./phoneNumbers.js'); //way to install my deepEquals file

describe('phoneNumbers',function() {
  //organises the test

  it('should take a single number and return all string outputs', function() {
    expect(phoneNumbers("3")).to.equal(["d","e","f"]);
  });

  it('should take a a multidigit number and return all string outputs', function() {
    expect(phoneNumbers("23")).to.equal(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    expect(phoneNumbers("555")).to.equal(['jjj','jjk','jjl','jkj','jkk','jkl','jlj','jlk','jll','kjj','kjk','kjl','kkj','kkk','kkl','klj','klk','kll',
    'ljj','ljk','ljl','lkj','lkk','lkl','llj','llk','lll']);
  });

  it('should return an empty array if the input is 1', function() {
    expect(phoneNumbers("1")).to.equal([]);
  });

  it('should remove any ones from the imput string before calculating the answer', function() {
    expect(phoneNumbers("91")).to.equal(["w","x","y","z"]);
  });

  it('should return an array with one space if the input is 0', function() {
    expect(phoneNumbers("0")).to.equal([" "]);
  });

  it('should return a space in the output where the number 0 is in the input', function() {
    expect(phoneNumbers("20")).to.equal(["a ", "b ", "c "]);
    expect(phoneNumbers("208")).to.equal(["a t","a u","a v","b t","b u","b v","c t","c u","c v"]);
  });

});

//mocha deepEquals.js in terminal to run the tests :)



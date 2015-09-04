
var mocha = require('mocha'); //access the mocha library
var expect = require('chai').expect; //access to the chai function expect
var telephoneWords = require('./phoneNumbers.js'); //way to install my deepEquals file

describe('telephoneWords',function() {
  //organises the test

  it('should take a single number and return all string outputs', function() {
    expect(telephoneWords("3")).to.deep.equal(["d","e","f"]);
  });

  it('should take a a multidigit number and return all string outputs', function() {
    expect(telephoneWords("23")).to.deep.equal(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    expect(telephoneWords("555")).to.deep.equal(['jjj','jjk','jjl','jkj','jkk','jkl','jlj','jlk','jll','kjj','kjk','kjl','kkj','kkk','kkl','klj','klk','kll',
    'ljj','ljk','ljl','lkj','lkk','lkl','llj','llk','lll']);
  });

  it('should return an empty array if the input is 1', function() {
    expect(telephoneWords("1")).to.deep.equal([]);
  });

  it('should remove any ones from the imput string before calculating the answer', function() {
    expect(telephoneWords("91")).to.deep.equal(["w","x","y","z"]);
  });

  it('should return an array with one space if the input is 0', function() {
    expect(telephoneWords("0")).to.deep.equal([" "]);
  });

  it('should return a space in the output where the number 0 is in the input', function() {
    expect(telephoneWords("20")).to.deep.equal(["a ", "b ", "c "]);
    expect(telephoneWords("208")).to.deep.equal(["a t","a u","a v","b t","b u","b v","c t","c u","c v"]);
  });

});

//mocha phoneNumbersTest.js in terminal to run the tests :)



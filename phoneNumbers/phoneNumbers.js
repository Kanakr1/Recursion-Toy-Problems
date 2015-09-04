/*Write a function that takes the digits of a phone number, and returns a list of all of the words 
(combinations of letters... they don't have to be real words) that can be written on the phone with that number.

You might find the following object useful:

One example case to get you started:
telephoneWords("23"); // should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
telephoneWords("55"); ['jjj','jjk','jjl','jkj','jkk','jkl','jlj','jlk','jll','kjj','kjk','kjl','kkj','kkk','kkl','klj','klk','kll',
'ljj','ljk','ljl','lkj','lkk','lkl','llj','llk','lll']



You should write a couple more examples for yourself! And maybe a little test suite =)
*/


var keyboard = {
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
  0: ' ',
};

var telephoneWords = function(numString){
  var result = [];
  /*remove unwanted 1*/
  var numCheck = false;
  //checking if any numbers are not one want to not replace(line 40) if the string is just ones
  for (var m = 0; m < numString.length; m++) {
    if(numString[m] !== '1') {
      numCheck=true;
    }
  }
  if(numCheck===true) {
    numString = numString.replace(/[1]/g, '');
  }
  
  var words = function(suffix, prefix) {
  
    prefix = prefix || [];
    if(suffix.length === 0) { //BASE
      result.push(prefix);
    } else { //RECURSION
      
      var prefixOptions = [];
      //take the first thing in suffix and convert to letters and loop throught each and add to prefix in new variable
      var letters = keyboard[suffix[0]];
      suffix = suffix.slice(1);//IS THIS CAUSING MY PROBLEMS???

      for (var i = 0; i < letters.length; i++) {
        var newPrefix = prefix+letters[i];
        prefixOptions.push(newPrefix);
      }

      for (var k = 0; k < prefixOptions.length; k++) {
        words(suffix, prefixOptions[k]);
      }

    }

  };
    
  words(numString);
  return result;
};


//without an inner function
/*
var phoneNumbers = function(numString, prefix, results) {
  var input;
  results = results || [];
  prefix = prefix || [];

  numString = numString.replace(/[1]/g, ''); //so much easier!! Thank you regex!!

  if(numString.length === 0) {
      results.push(prefix);
    } else { 
      
      var prefixOptions = [];
      var letters = keyboard[numString[0]];
      numString = numString.slice(1);

      for (var i = 0; i < letters.length; i++) {
        var newPrefix = prefix+letters[i];
        prefixOptions.push(newPrefix);
      }

      for (var k = 0; k < prefixOptions.length; k++) {
        phoneNumbers(numString, prefixOptions[k],results);
      }

    }

    return results;
};
*/



module.exports = telephoneWords; //module is global thing that tells anyone requiring this which chunk of the file to export(can be multiple exports-given as an object)




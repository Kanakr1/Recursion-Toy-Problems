/*
Write a function that takes as its input a string and returns an array of
arrays as shown below sorted in descending order by frequency and then by
ascending order by character.
*/

//example 1:
characterFrequency('mississippi') ===
[
  ['i', 4], //note this is sorted first by frequency
  ['s', 4],
  ['p', 2],
  ['m', 1]
]; //should be true


//example 2:
characterFrequency('miaaiaaippi') ===
[
  ['a', 4], //note this is sorted first by frequency,
  ['i', 4], //but if any letters have the same frequency,
  ['p', 2], //they are then sorted alphabetically. So 'a'
  ['m', 1]  //comes before 'i'
]; //should be true



//format string
var makeArrayOfLetterFreq = function(str) {
  str = str.toLowerCase();
  var arr = str.split('');
  var objFreq = {};
  var resArr = [];
  var frequency = arr.forEach(function(element) {
    if(objFreq.hasOwnProperty(element)) {
      objFreq[element]= objFreq[element]+1;
    } else {
      objFreq[element] = 1;
    }
  });
  for(var key in objFreq) {
    resArr.push([key,objFreq[key]]);
  }
  objFreq.keys = Object.keys(objFreq);
  return resArr;
};

//format to sort by number

var sortInArr = function(arr,markers) {
  
  for (var w = 0; w<markers.length; w++) {
    for(var m=0; m<arr.length; m++) {
      if(arr[m][1]===markers[w][0]) {
        markers[w].push(arr[m]);
      }
    }
  }
  for (var r = 0; r<markers.length; r++) {
    markers[r].splice(0,1);
  }
  return markers;
};


//main function
var characterFrequency = function(string){
  var numAndAlphaSorted = [];
  var arrStr = makeArrayOfLetterFreq(string); //formatts string to array of arrays
  var numbers =[]; //[3,1,2,1,1] array of all the frequencies of number counts
 
  for(var i=0;i<arrStr.length;i++) {
    if(numbers.indexOf(arrStr[i][1])===-1) {
      numbers.push(arrStr[i][1]); //push to numbers if not already there
    }
  }
  numbers = numbers.sort(function(a, b) { //sort descending
    return b - a;
  });

  var arrOfNum = [];
  numbers.forEach(function(element) { //make each number an array in its own right in the arrOfNum
    arrOfNum.push([element]);
  });

  var formatOne = sortInArr(arrStr,arrOfNum); //function that puts the input arrays into the correct number array

  for (var b = 0; b<formatOne.length; b++) {
    numAndAlphaSorted.formatOne[b].sort(); //sort each array of a certain number by alphabet
  }

  return numAndAlphaSorted; //return-phew!

};























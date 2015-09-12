/*Count the occurences of an element inside a list.
[2,7,4,4,1,4], 4
Returns 3*/

// with a for loop

var ocFreq = function(arr, target) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      counter++;
    }
  }
  return counter;
};

//now solve recursively .... not with inner function!!

var countOccurences = function(array, target, index, result) {
  result = result || 0;
  index = index || 0;
  if(index===array.length) { //if got to the end of the array end
    return result;
  } else {
    if(array[index] === target) { //if the current number is the target ....
      result ++; // ..then add one to result
    }
    return ocFreq(array, target, index+1, result); //needed to remember the RETURN HERE!!
  }
  return result;
};

countOccurences([2,1,3,4,2,4,2,1,4],4);
/*9.Zip two lists of numbers. If one list is shorter, just append the rest of the other list. 
First element comes from the first list. [2,7,8,3,1,4], [9,5,1] Returns [2,9,7,5,8,1,3,1,4]*/

/*var zip = function(array, array2) {
  var result = [];
  if(array.length === array2.length) {
    for (var i = 0; i < array.length; i++) {
      result.push(array[i],array2[i]);
    }
  } else if(array2.length>array.length) {
    for (var k = 0; k < array2.length; k++) {
      if(array[k]===undefined) {
        result.push(array2[k]);
      } else {
        result.push(array[k],array2[k]);
      }
    }
  } else {
    for (var m = 0; m < array.length; m++) {
      if(array2[m]===undefined) {
        result.push(array[m]);
      } else {
        result.push(array[m],array2[m]);
      }
    }
  }
  return result;
};*/

//more cosice method

var zip = function(array, array2) {
  var maxLength = Math.max(array.length, array2.length);

  var first, next, result = [];
  for(var i=0; i<maxLength; i++){

    first = array[i] === undefined ? null : array[i];
    second = array2[i] === undefined ? null : array2[i];

    if(first !== null) result.push(first);
    if(second !== null) result.push(second);

  }

  return result;
};

//recursively with inner

var zip = function(array,array2) {
  var maxLength = Math.max(array.length, array2.length);
  var first, next, result = [];

  var inner = function(array,array2,i) {
    first = array[i] === undefined ? null : array[i];
    second = array2[i] === undefined ? null : array2[i];

    if(first !== null) {
      result.push(first);
    }
    if(second !== null) {
      result.push(second);
    }
    if(i>maxLength) {
      return result;
    }
    inner(array,array2,i+1,maxLength);
  };

  inner(array,array2,0);
  return result;

};

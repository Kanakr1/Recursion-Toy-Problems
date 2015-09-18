
/*Put every element into its own list. [2,7,8,3,1,4] 
Returns [[2], [7], [8], [3], [1], [4]]*/

var uniqueList = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push([array[i]]);
  }
  return result;
};

//recursively

var uniqueList = function(array, i, result) {
  result = result || []; //this is our 'google shared doc' 
  if(i>array.length-1) {
    //BASE CASE
    return result;
  } else {
    //RECURSIVE CASE
    result.push([array[i]]);
  //each recursive call adds to the shared result array which gets passed along on each recurse
    return uniqueList(array,i+1, result);
  }
  return result;
};

//recursively with inner

var uniqueList = function(array) {
//this is our bucket where all the returns from the inner function 'throw their result'
  var result = [];
  var inner = function(array, i) {
    if(i>array.length-1) {
      //BASE CASE
      return result;
    } else {
      //RECURSIVE CASE
      result.push([array[i]]);
      return inner(array,i+1,result);
    }
  };
  inner(array,0);
  return result;
};






















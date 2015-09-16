/*5.Given a list of lists of numbers, return a flat list of all numbers. 
[[2,7], [8,3], [1,4]] Returns [2,7,8,3,1,4]*/


//for loop

var flatten = function(array) {
  var result = [];
  for(var i=0; i <array.length; i++) {
    for (var k = 0; k < array[i].length; k++) {
      result.push(array[i][k]);
    }
  }
  return result;
};

//resursion inner function

  var flatten = function(array) {
    var result = [];
    var inner = function(array, i,k) {
        if(array.length===i) {
          return result;
        } else {
          if(array[i][k]===undefined) { //when to the end of the inner array up i by one and reset k
            return inner(array,i+1,0);
          } else {
            result.push(array[i][k]);
            return inner(array,i,k+1);
          }
        }
    };
    inner(array,0,0);
    return result;
  };

//recusion with no inner function-YAY!

  var flatten = function(array,i,k,result) {
    result = result || [];
    if(array.length === i) {
      return result;
    } else {
      if(array[i][k]===undefined) { //when to the end of the inner array up i by one and reset k
        return flatten(array,i+1,0,result);
      } else {
        result.push(array[i][k]);
        return flatten(array,i,k+1,result);
      }
    }
    return result;
  };










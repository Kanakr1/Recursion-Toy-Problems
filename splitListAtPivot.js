/*6.Split a list of numbers with regard to a pivot element. 
All elements smaller than the pivot element go in the first return list, 
all other elements go into the second return list. Both return list are inside one 
list. [2,7,8,3,1,4] , 4 Returns [[2,3,1],[7,8,4]]*/

//with a for loop

var split = function(array, pivot) {
  var higher = [];
  var lower = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i]>pivot || array[i]===pivot) {
      higher.push(array[i]);
    } else{
      lower.push(array[i]);
    }
  }
  return [lower,higher];
};

//recursion  no inner

var split = function(array, pivot, i, resultA, resultB) {
  resultA = resultA || [];
  resultB = resultB || [];
  if(i>array.length-1) {
    return [resultA,resultB];
  } else {
    if(array[i]>pivot || array[i]=== pivot) {
      resultB.push(array[i]);
    } else {
      resultA.push(array[i]);
    }
    return split(array, pivot, i+1, resultA, resultB);
  }
};

//with ternary operator used
var split = function(array, pivot, i, resultA, resultB) {
  resultA = resultA || [];
  resultB = resultB || [];
  if(i>array.length-1) {
    return [resultA,resultB];
  } else {
    (array[i]>pivot || array[i]=== pivot) ? resultB.push(array[i]) : resultA.push(array[i]);
    return split(array, pivot, i+1, resultA, resultB);
  }
};

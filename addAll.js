/*Add up all numbers in the list. [2,7,8,3,1,4] Returns 25*/

//with a for loop

var add = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total+=array[i];
  }
  return total;
};

//recursively with no inner and total argument

var add = function(array, i, total) {
  total = total || 0;
  if(i>array.length-1) {
    return total;
  } else {
    total+=array[i];
    return add(array,i+1,total);
  }
  return total;
};

//with inner function

var add = function(array) {
  var total = 0;
  var inner = function(array, i) {
    if(i>array.length-1) {
    return total;
    } else {
    total+=array[i];
    return inner(array,i+1);
    }
  };
  inner(array,0);
  return total;
};
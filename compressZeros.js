/*
12.Reduce series of 0s to a single 0. [2,0,0,0,1,4] Returns [2,0,1,4]*/

var reduceZeros = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]!==0 || result.indexOf(0)===-1) {
      result.push(arr[i]);
    }
  }
  return result;
};

//recursive

var reduceZeros = function(arr) {
  var result = [];
  var inner = function(arr, i) {
    if(i>arr.length-1) {
      return result;
    } else if(arr[i]!==0 || result.indexOf(0)===-1) {
      result.push(arr[i]);
    }
    inner(arr,i+1);
  };
  inner(arr,0);
  return result;
};
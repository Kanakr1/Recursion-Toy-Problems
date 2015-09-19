//14.Augument every element in a list with a new value. The elemts are lists themselves. 
//[[],[3],[7]] , 5 Returns [[5],[3,5],[7,5]]

//with loop
var augment = function(arr,num) {
  var result=[];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].concat(num));
  }
  return result;
};

//recursion

var augment = function(arr,i,num,result) {
  result = result || [];
  if(i>arr.length-1) {
    return result;
  } else {
    result.push(arr[i].concat(num));
    augment(arr,i+1,num,result);
  }
  return result;
};

augment([[],[3],[7]] ,0, 5);

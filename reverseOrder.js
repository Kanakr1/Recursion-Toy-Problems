/*Reverse the order of the list.
[2,7,8,3,1,4]
Returns [4,1,3,8,7,2]*/

/*var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
>>Lemon,Pineapple,Banana,Orange,Apple,Mango*/

//for loop way

var reverse = function(array) {
  var result = [];
  for(var i=0; i<array.length; i++) {
    result.unshift(array[i]);
  }
  return result;
};

//now with recursion

var recurseReverse = function(array, i, result) {
  result = result || [];
  i = i || 0;
  if(i===array.length) {
    return result;
  } else {
    //go through each and unshift to the array
    result.unshift(array[i]);
    return recurseReverse(array,i+1,result);
  }
  return result;
};
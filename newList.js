/*10.Create a new list with a given value and length. 0, 5 Returns [0,0,0,0,0] 7, 3 Returns [7,7,7]*/

var newList= function(num,num2) {
  var newL = [];
  while (newL.length<num2){
    newL.push(num);
  }
  return newL;
};

//recursively

var newList = function(num,num2, result) {
  result = result || [];
  if(result.length===num2) {
    return result;
  } else {
    result.push(num);
    return newList(num,num2,result);
  }
  return result;
};
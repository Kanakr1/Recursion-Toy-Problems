/*11.Create a range list counting from a start to an end. Excluding the end. 2,5 
Returns [2,3,4] 8,1 Returns [8,7,6,5,4,3,2] 3,3 Returns []
*/

var range = function(start,end) {
  var result = [];
  if(start === end) {
    return [];
  }
  if(start<end) {
    for (var i = start; i < end; i++) {
      result.push(i);
    }
  } else {
    for (var k = start; k >= end; k--) {
      result.push(k);
    }
  }
  return result;
};

//recursive 

var range = function(start,end,result) {
  result = result||[];
  if(start === end) {
    return result;
  } if(start<end) {
    result.push(start);
    start++;
  } else {
    result.push(start);
    start--;
  }
  range(start,end,result);
  return result;
};

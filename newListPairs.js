/*4.Put element pairs in their own list. If you have an odd number of elements, 
add a 0. [2,7,8,3,1,4] Returns [[2,7], [8,3], [1,4]] [3,6,8,1,5] Returns [[3,6],[8,1],[5,0]]*/

var pairs = function(array) {
  var result = [];
  var inner = function(array,i) {
    if(i>array.length-1) {
      return result;
    } else {
      if(array[i+1] === undefined) {
        result.push([array[i],0]);
      } else {
        result.push([array[i],array[i+1]]);
        return(inner(array,i+2));
      }
    }
  };
  inner(array,0);
  return result;
};
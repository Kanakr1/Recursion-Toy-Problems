/*8.Alternate the numbers sign regardless of their original sign. Start with +; [2,7,8,3,1,4] Returns [2,-7,8,-3,1,-4]*/

var alturnateSigns = function(array) {
  
  for (var i = 0; i < array.length; i++) {
    
    array[i] = Math.abs(array[i]); //make sure all are positive before evens made negative
    
    if(i%2!==0) {
      array[i] = (-array[i]);
    }
  
  }

  return array;

};

//could have a results array to not mutate the original..

//recursively

var alturnateSigns = function(array) {

  var result = [];

  var inner = function(array,i) {
    var currentPosNum = Math.abs(array[i]);
    if(i>array.length-1) {
      return result;
    } else if(currentPosNum % 2 === 0) {
      result.push(-currentPosNum);
    } else {
      result.push(currentPosNum);
    }
    return inner(array,i+1);
  };

  inner(array,0);
  return result;

};

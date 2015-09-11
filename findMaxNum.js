/*1.
find the max value in the list [2,7,8,3,1,4]
*/

//first with loop

var max= function(array) {
  var max = array[0];
  for(var i=0; i<array.length; i++) {
    if(array[i]>max) {
      max = array[i];
    }
  }
  return max;
};

//now with recursion

var max = function(array) {
  var maxNum = array[0];

  var maxNumFind = function(arr,i) {
    if(i>arr.length-1) { //if we are on the last number in the array
      //base
      return maxNum;
    } else { //ask the nxt 'person in the cinema' if they have a bigger number than max number
      //recursion
      if(arr[i]>maxNum) {
        maxNum = arr[i];
        maxNumFind(arr,i++);
      }

    }
    //index++; //add one to the index
  };
  maxNumFind(array,0);
  return maxNum;
};
/*make a function that takes two args and returns the numbers in the other arg between those indexes (not including the top index)
e.g.[1,2,3,4,5],[1,3] returns [2,3]. In this excercise we assume that the max value in the second arg is going to 
be < or === to the length of the first arg.  */

var subArray = function(arr,subArray) {
  var i=subArray[0];
  var results = [];

  while(i===subArray[0] || i<subArray[1]) {
    results.push(arr[i]);
    i++;
  }

  return results;

};
subArray([1,2,3,4,5,6],[1,3]);

//recursion

var subArray = function(arr,subArr,i,results) {
  i = i || subArr[0];
  results = results || [];

  if(i === subArr[0] || i<subArr[1]) {
    results.push(arr[i]);
    return subArray(arr,subArr,i+1,results);
  } else {
    return results;
  }

};
subArray([1,2,3,4,5,6],[1,3]);

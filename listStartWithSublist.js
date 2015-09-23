/*Return true or false, if a given list starts with a sublist. 
[2,7,8,3,1,4] , [2,7] Returns true [5,6,7,1,4,6,7,1,3] , [6,7,1] Returns false*/

var startWithSublist = function(arr,subArr) {
  var subLength = subArr.length;
  arr = arr.slice(0,subLength);

  for (var i = 0; i < arr.length; i++) {
    if(arr[i]!==subArr[i]) {
      return false;
    }
  }
  return true;

};

startWithSublist([1,2,3,4],[1,2,43]);

//while loop

var startWithSublist= function(arr,subArr) {
  var subLength = subArr.length;
  var i=0;
  while(i<subLength) {
    if(arr[i]!== subArr[i]) {
      return false;
    }
    i++;
  }
  return true;
};

startWithSublist([1,2,3,4],[333,333]);

//recursion with inner

var startWithSublist = function(arr,subArr) {
  var subLength = subArr.length;
  var result = [];

  var inner = function(arr,subArr,i) {
    if(i<subLength) {
      if(arr[i]!==subArr[i]) {
        result = false;
      }
      inner(arr,subArr,i+1);
    }
  };

  inner(arr,subArr,0);
  return result===false ? false : true;
};



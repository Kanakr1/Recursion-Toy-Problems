/*
15.Set every list as the last item of the previous list. 
Return on the root list. [[4,3],[5,6],[8,2]] Returns [4,3,[5,6,[8,2]]]
*/

var setEachToLast = function(arrays) {
  var args = Array.prototype.slice.call(arguments);
  for (var i = args.length-1; i > 0; i--) {
    var prev = args[i-1];
    var prevLength = args[i-1].length;
    prev[prevLength]=args[i];
  }
  return args[0];
};

setEachToLast([1,2],[3,4],[5,6]);

//while loop

var setEachToLast = function(arrays) {
  var args = Array.prototype.slice.call(arguments);
  var last = args[args.length-1];console.log(last);
  var max = args.length-1;
  while(max>0) {
    var prev = args[max-1];
    var prevLength = args[max-1].length;
    prev[prevLength]=args[max];
    max--;
  }
  return args[0];
};

//recusrion
/*var setEachToLast = function(arrays) {
  var args = Array.prototype.slice.call(arguments); //get array of arguments
  var last = args[args.length-1];
  var max = args.length-1;

  if(max>0) { //THIS BIT NOT WORKING! THINK ANNA!
    var prev = args[max-1];
    var prevLength = args[max-1].length;
    prev[prevLength]=args[max];
    max--;
    setEachToLast(args);
  } else {
    return args[0];
  }
  
};
setEachToLast([1,2],[3,4],[5,6]);*/

//////


var setEachToLast = function(arrays) {
  var args = Array.prototype.slice.call(arguments);
  var last = args[args.length-1];
  var result = args.slice(0);
  var max = result.length-1;

  var inner = function(ar) {
    if(max>0) {
      var prev = result[max-1];
      var prevLength = result[max-1].length;
      prev[prevLength]=result[max];
      max-=1;
      inner(result);
    } else {
      return result[1];
    }
  };

  inner(result);
  return result[0];
  
};
setEachToLast([1,2],[3,4],[5,6]);




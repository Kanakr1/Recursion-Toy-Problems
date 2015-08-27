/*You should check if two things passed to your function are the exact same. I.e., it should work on both arrays and objects. 

Your code should work with the following examples:

*/


var deepEquals = function(objA, objB){
  var test1 = Object.prototype.toString.call(objA);
  var test2 = Object.prototype.toString.call(objB);
  
  if(test1 === "[object Object]" || test2 === "[object Object]") { //if first or second input is an object 
    var k1 = Object.keys(objA);
    var k2 = Object.keys(objB);
    
    if(k1.length !== k2.length) { //not the same 
      return false;
    }

    //otherwize we need to go through the object and compare values
    for(var key in objA) {
        //then we need to recurse
      return deepEquals(objA[key], objB[key]);
    }
  

  } else {
    //string or array or number etc
    if(objA.length !== objB.length) {
      return false;
    }
    
    for(var i=0; i<objA.length; i++) {
      if(typeof objA === 'object' || typeof objB === 'object') {
        return deepEquals(objA[i],objB[i]);
      } else if(objA[i] !== objB[i]) {
        return false;
      }
    }
    
    return true;
  
  }
};

module.exports = deepEquals; //module is global thing that tells anyone requiring this which chunk of the file to export(can be multiple exports-given as an object)

/* 
myNestedObj = { a: 5, b: 10, c: { d: 12, e: { f: 13, g: 17, h: { i:20, j:22 } } } };

Take a nested object and return the sum of all the even numbers of that object.
The object will only contain values that are objects or numbers.
*/

//recusrive with inner

var getEvensSum = function(obj) {
  
  var bucket = 0;

  var inner = function(obj) {
    for(var key in obj) {
      if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
        inner(obj[key]);
      } else {
        if(obj[key]%2 === 0) {
          bucket += (obj[key]);
        }
      }
    }
  };
  
  inner(obj);
  return bucket;

};

//recursive without inner

var getEvensSum = function(obj, googleDoc) {

  googleDoc = googleDoc || 0;

  for(var key in obj) {
    if(typeof obj[key] === 'object') {
      getEvens(obj[key], googleDoc);
    } else {
       if(obj[key]%2 === 0) {
          googleDoc += (obj[key]); 
        }
    }
  }
  return googleDoc;
};

//recursively with the pass it on method

var getEvensSum = function(obj) {

  var result = 0;
  
  for(var key in obj){
  
    if(Object.prototype.toString.call(obj[key]) === '[object Object]'){
      result += getEvensSum(obj[key]);
    } else {
      if((obj[key]%2)===0){
        result += obj[key];
      }
    }

  }

  return result;

};






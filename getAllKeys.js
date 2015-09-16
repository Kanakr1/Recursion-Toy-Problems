// Using recursion, write a function called `getAllKeys` that takes an
// object and returns array of all its keys. Your function should list
// all keys for any nested objects. You may assume any object passed to
// your function will only contain strings, numbers, and other objects.
// 
// Examples:
//   getAllKeys({user: 'Dan', password: 'letmein'}); 
//   // returns ['user', 'password']
// 
//   getAllKeys({name: 'Beth', address: {street: '123 main', city: 'sf'}}); 
//   //returns ['name', 'address', 'street', 'city']

var getAllKeys = function (obj){
  //results bucket for keys collected
  var results = [];

  //inner function addKeysToBucket
  var addKeysToBucket = function(obj) {
  //for in loop
    // push key to results
    for(var key in obj) {
      results.push(key);
    // BASE: if key is number or string
      // do nothing
      if(typeof obj[key] === 'object') {
    // RECUSRSIVE CASE: if value is an object
      // pass back to inner function, addKeysToBucket(value)
        return addKeysToBucket(obj[key]);
      }
    }
  };

  addKeysToBucket(obj);
  return results;
};
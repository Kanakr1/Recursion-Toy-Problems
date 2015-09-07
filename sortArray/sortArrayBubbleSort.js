/*sort an array of numbers in ascending order. 

Bubble Sort: repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
Insertion sort: iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, 
and inserts it there. It repeats until no input elements remain.


You should make your solution fit the following cases:

[8, 7, 6, 5, 4, 3, 2, 1]

[1, 8, 2, 7, 3, 6, 4, 5]

[8, 8, 8, 1, 1, 1, 8, 1]

[0, 9, 8, 1, 2, 3, 6, 7]

*/


//determines if an array is sorted or not and returns true/false
var sort = function(arr) {
  var order = true;
  for(var i=0; i<arr.length; i++) {
    if(arr[i]>arr[i+1]) {
      order = false;
    }
  }
  return order;
};

var sortArray = function(array) {

  var sorted = function(a) {
    if(sort(a)) { //BASE
      return a;
   
    } else { //RECURSIVE CASE
      for(var k=0; k<a.length; k++) {
        if(a[k]>a[k+1]) { //if current is bigger than next swap them
          var first = a[k];
          var next = a[k+1];
          a[k]= next;
          a[k+1]=first;
        }
      }
      return sorted(a);
    }
  
  };

  return sorted(array);

};

//different recursive pattern

//determines if an array is sorted or not and returns true/false

var sort = function(arr) {
  var order = true;
  for(var i=0; i<arr.length; i++) {
    if(arr[i]>arr[i+1]) {
      order = false;
    }
  }
  return order;
};

var sortArray = function(array) {
  
  if(sort(array)) { //BASE
    
    return array;
  
  } else { //RECURSIVE CASE
  
    for(var k=0; k<array.length; k++) {
      if(array[k]>array[k+1]) {
        var first = array[k];
        var next = array[k+1];
        array[k]= next;
        array[k+1]=first;
      }
    
    }
    return sortArray(array);
  }

};



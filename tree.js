//make a binary tree diagram constructor

var Tree = function(number) {

  var result = {};

  result.value = number;
  result.rightSide = null;
  result.leftSide = null;

  result.insert = function(num) {

    if(num>result.value) {
      if(result.rightSide === null) {
        console.log("right insert");
        result.rightSide = Tree(num); //here!
      } else {
        console.log("recurse right");
        result.leftSide.insert(num);
      }
    } else {
      if(result.leftSide === null) {
        console.log("left insert");
        result.leftSide = Tree(num);
      } else {
         console.log("recurse left");
         console.log(result.leftSide);
         result.leftSide.insert(num);
      }
    }
  };

  result.search = function(searchNum) {
    console.log(result.value);
    if(result.value===searchNum) { //if search number is the value on return true
      return true;
    } else if(result.value<searchNum && result.rightSide !==null) { //if the search num is greater then move to the right if not null(empty)
        return result.rightSide.search(searchNum);
    } else if(result.value>searchNum && result.leftSide!==null) { //else move to the left if not null(empty)
        return result.leftSide.search(searchNum);
    }
    return false; //if not found return false
  };
  
  return result;

};
  
//insert


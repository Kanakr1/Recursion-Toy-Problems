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
    if(result.value===searchNum) { //if search number is the value on return true
      return true;
    } else if(result.value<searchNum && result.rightSide !==null) { //if the search num is greater then move to the right if not null(empty)
        return result.rightSide.search(searchNum);
    } else if(result.value>searchNum && result.leftSide!==null) { //else move to the left if not null(empty)
        return result.leftSide.search(searchNum);
    }
    return false; //if not found return false
  };
  
  result.between = function(start,end,googleDoc) {

    googleDoc = googleDoc || [];

      if(result.value>start && result.value<end) { //if the current value is between the start and end push it
        googleDoc.push(result.value);
      }

      //if the range is greater than the current value then recurse right and that the right is defined
      if(start>result.value && result.rightSide !== null){
          result.rightSide.between(start,end,googleDoc);
      //if the range is less than value then recurse left and that the left is defined
      } else if(end<result.value && result.leftSide !== null){
          result.leftSide.between(start,end,googleDoc);
      //if the values span the number then we need to check both sides
      } else {
        //check that each side is defined(ask if true)
        if(result.rightSide) {
          result.rightSide.between(start,end,googleDoc);
        }
        if(result.leftSide) {
          result.leftSide.between(start,end,googleDoc);
        }
      }

      return googleDoc; //if right/left is true put this in code and make another if for the middle 
  };

  return result;

};

  



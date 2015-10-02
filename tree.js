//make a binary tree diagram constructor

var Tree = function(number) {

  var result = {};

  result.value = number;
  result.rightSide = null;
  result.leftSide = null;

  result.insert = function(num) {

    if(num>result.value) {
      if(result.rightSide === null) {
        result.rightSide = Tree(num); //here!
      } else {
        result.rightSide.insert(num);
      }
    } else {
      if(result.leftSide === null) {
        result.leftSide = Tree(num);
      } else {
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

  result.bredthFirst = function(tree) {
    //if the tree is empty then return 'empty tree'
    if(tree.leftSide === null && tree.rightSide === null) {
      console.log('empty');
    }
    var queue = []; //where elements gets queued as move through the tree
    var visited = []; //where been before
    
    queue.push(tree); //add to queue

    while(queue.length>0) {

      var seen = queue.shift();
      visited.push(seen.value); //put the first value in queue to seen and remove from the queue

      if(seen.leftSide !== null) { //if has a left get val
        queue.push(seen.leftSide);
      }
      if(seen.rightSide !== null) { //if has a righ get val
        queue.push(seen.rightSide);
      }

    }
    return visited; //array of all nodes in bredth first order :)

  };

    result.preorDepthFirst = function(tree) {
    var visited = [];

    var inner = function(tree) {
      console.log(tree.value);
          
      visited.push(tree.value);
    
      while(tree.leftSide !== null/* || tree.rightSide !== null*/) { //takes me down the left side how get back up?
        if(visited.indexOf(tree === -1)) {
        console.log('treeLeft:',tree.leftSide);
            return inner(tree.leftSide);
            return inner(tree.rightSide);
          }
      }
    
    };

    inner(tree);
    return visited;
  };


  return result;

};

  
var ve = Tree(10)

ve.insert(5)

ve.insert(2)

ve.insert(7)

ve.insert(15)

ve.insert(12)

ve.insert(20)

ve.preorDepthFirst(ve);


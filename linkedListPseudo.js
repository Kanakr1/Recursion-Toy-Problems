/*Implement a linked list using the pseudoclassical instantiation pattern.

Your linked list should have methods called "addToTail", "removeTail", and "contains".*/

var List = function() {
 
 this.start = null;
 this.end = null;

};

  //now that you're outside the constructor, you can't use THIS anymore. Use List.
  var MakeNode = function(data) {
    this.data = data;
    this.next = null;
  };

  MakeNode.prototype = Object.create(List.prototype);
  MakeNode.prototype.constructor = MakeNode;

  List.prototype.addToTail = function(data) {
    if (this.start === null) {
     this.start = new MakeNode(data);
     this.end = this.start;
    } else {
     this.end.next = new MakeNode(data); //the end of the list.next key set to new node
     this.end = this.end.next; //set end to be the end of this new node added
    }

  };


  List.prototype.removeTail = function() {
    var current = this.start;
    var nextData = current.next;
    while(nextData.next !== null) {
      current = nextData; //set the current to the next thing in the list 
      nextData = nextData.next; //set the next data to the next thing in the list
    }
    current.next = null; //once looped to the end set one before the ends next to be null
    this.end = current; //set end value to be the current/second last thing
  };

  List.prototype.contains = function(searchVal) {
    var current = this.start;
      while (current !== null) {  //as long as the start is not null loop
        if(current.data === searchVal) {
          return true;
        }
        current = current.next;
      }
      return false;
  };

var roo = new List();
roo.addToTail(10);
roo.addToTail(20);
roo.addToTail(30);
roo.addToTail(40);
roo.removeTail();
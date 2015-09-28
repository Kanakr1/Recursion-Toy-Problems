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
    return this;
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

  //recursive versions of removeTail and contains!
  List.prototype.removeTailRecursively = function() {
    var current = this.start;
    var nextData = current.next;
    var that = this;
    var inner = function(current,nextData) {
      if(nextData.next === null) {
        current.next = null; //once looped to the end set one before the ends next to be null
        that.end = current; //set end value to be the current/second last thing
      } else {
        current = nextData; //set the current to the next thing in the list 
        nextData = nextData.next; //set the next data to the next thing in the list
        inner(current,nextData);
      }
    };
    inner(current,nextData);
    return this;
  };

  List.prototype.containsRecursively = function(searchVal) {
    var current = this.start;
    var cont = false;
    var inner = function(current) {
      if(current !== null) {
        if(current.data === searchVal) {
          cont = true;
        } else {
          current = current.next;
          inner(current);
        }
      }
    };
    inner(current);
    return cont;
  };

var roo = new List();
roo.addToTail(10);
roo.addToTail(20);
roo.addToTail(30);
roo.addToTail(40);
roo.removeTail();
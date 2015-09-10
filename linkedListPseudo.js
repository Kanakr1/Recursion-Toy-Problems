/*Implement a linked list using the pseudoclassical instantiation pattern.

Your linked list should have methods called "addToTail", "removeTail", and "contains".*/

var List = function() {
 
 this.start = null;
 this.end = null;

};

    //now that you're outside the constructor, you can't use THIS anymore. Use List.
  List.prototype.makeNode = function() {
    return {data: null, next: null};
  };

  List.prototype.addToTail = function(data) { 
  if (this.start === null) {
   this.start = this.makeNode();
   this.end = this.start;
  } else {
   this.end.next = this.makeNode(); //the end of the list.next key set to new node
   this.end = this.end.next; //set end to be the end of this new node added
  }
  this.end.data = data; //set the data property on the new node to be the number rather than null
 };


  List.prototype.removeTail = function() {
    //var last = this.end.data; //the data of the last thing- this is what we want to 'disconnect'
    var current = this.start; //the start object
    var nextData = current.next; // the data on the next node
    
    if(nextData === null) { //we know this is the one before the end so we want to make it the last
      //BASE
      console.log(this.end);
      current.next = null; //make the next property null
      this.end = current; //make the end node this
    } else { //look at the next node
      //RECURSION
      console(current.next);
      current.next.removeTail();//look at the first node and then at the next node and do the remove tail function on that node
    }

    return this;
 };

  List.prototype.contains = function(searchVal) {
    var current = this.start; //start
      while (current !== null) {  //as long as the start is not null loop
        if(current.data === searchVal) {
          return true;
        } else {
          console.log('looping through each one');
        }
        current = current.next; //current 
      }
      return false;
  };

var roo = new List()
roo.addToTail(10)
roo.removeTail()


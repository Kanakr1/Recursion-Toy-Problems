
var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(name){
  this.nodes[name] = {};
};

Graph.prototype.connectNodes = function(nodeOne, nodeTwo){
  if(this.nodes[nodeOne].connectedNodes) {
    this.nodes[nodeOne].connectedNodes[nodeTwo] = 1; //this.nodes[nodeTwo];
  } else {
    this.nodes[nodeOne].connectedNodes = {};
    this.nodes[nodeOne].connectedNodes[nodeTwo] = 1;
  }

  if(this.nodes[nodeTwo].connectedNodes) {
    this.nodes[nodeTwo].connectedNodes[nodeOne]=1;
  } else {
    this.nodes[nodeTwo].connectedNodes = {};
    this.nodes[nodeTwo].connectedNodes[nodeOne] = 1;
  }
};


Graph.prototype.isConnected = function(nodeOne, nodeTwo){//anna steph
  var start = this.nodes[nodeOne].connectedNodes;
  var current = nodeOne;
  var checked = []; //place to store names already checked
  var result = false; //make it initially false that the name has already been seen
  var that = this; //need this or bind for inner() 

  var keys = Object.keys(this.nodes); //make sure the name exists in the graph first
  if(keys.indexOf(nodeOne)===-1 || keys.indexOf(nodeTwo)===-1) {
    return result;
  }

  var inner = function(start,nodeTwo,current) {
    if(result===false) { //if the result is not true
      checked.push(current); //put the name currently on in checked
      var names = Object.keys(start); //array of names in current connectedNodes obj on the node
      if(names.indexOf(nodeTwo) !== -1) { //if the nodeTwo is there then return true
        result = true;
        return result;
      }
      //if not there then
        //want to search all inputs connected nodes to see if they contain nodeTwo
      for(var i=0; i<names.length; i++) {
        var name = names[i];
         if(checked.indexOf(name) === -1) {
          start = that.nodes[name].connectedNodes; //re-assign start
          current = name; //and current
          inner(start,nodeTwo,current); //call inner with new variables :)
        }
      }
    } else { //if result is true return it!
      return result;
    }
  };

  inner(start,nodeTwo,current);
  return result;
};


Graph.prototype.disconnectNodes = function(nodeOne, nodeTwo){
  //take anna and kate and remove the connection means go to the connectedNodes on both nodeOne and nodeTwo and remove the other from the list
  if(this.nodes[nodeOne].connectedNodes[nodeTwo]) {
    delete this.nodes[nodeOne].connectedNodes[nodeTwo];
  }
  if(this.nodes[nodeTwo].connectedNodes[nodeOne]) {
    delete this.nodes[nodeTwo].connectedNodes[nodeOne];
  }
  return this;
};

//extra credit!
//basically this is isConnected but with a counter not a variable pointing to true/false :)
Graph.prototype.DoS = function(nodeOne, nodeTwo){
  //need to keep track of who looked at
  var visited = [];
  //trak of how namy degrees
  var counter = 0;
  //might want to keep track of results
  var result = [];
  //look at first node
  var inner = function(nodeOne,nodeTwo) {
    visited.push(nodeOne); //mark as visited
    var start = this.nodes[nodeOne].connectedNodes; //set start point
    var nodesHere = Object.keys(start); //array of all friends of first person
    if(nodesHere.indexOf(nodeTwo) !== -1) {
      //its here!
      counter++;
      return counter;
    } else {
      //not here so need to look at the first child nodeOne and thier first child etc.
      for (var i = 0; i < nodesHere.length; i++) {
        //for the children of the node get the first that not already visited
        if(visited.indexOf(nodesHere[i]) === -1) { //if not visited then we want to move to this node
          //and then recuse on this first node
          counter++;
          nodeOne = nodesHere[i]; //pushed to visited on recurse above
          
          this.inner(nodeOne,nodeTwo); //recurse ...until reached the bottom/no further to go
          //if not found the nodeTwo then I need to back up .... and see in level before(stack popping things off the top)
        

        }
      }
    }
  };
  inner(nodeOne,nodeTwo);

};


//your test case!
var g = new Graph();
//step 1
g.addNode('Anna');
g.addNode('Kate');
g.connectNodes('Anna', 'Kate');
g.isConnected('Anna', 'Kate'); //should return true
g.isConnected('Kate', 'Anna'); //should return true


//step 2
g.addNode('Steph');
g.connectNodes('Kate', 'Steph');
g.isConnected('Anna', 'Steph'); //true

//step 3
g.addNode('Hannah');
g.connectNodes('Hannah', 'Anna');
g.connectNodes('Hannah', 'Steph');
g.isConnected('Kate', 'Hannah'); //true

g.addNode('Rohan');
g.isConnected('Kate', 'Rohan'); //false
g.DoS('Anna', 'Steph'); //2
g.DoS('Anna', 'Rohan'); //null
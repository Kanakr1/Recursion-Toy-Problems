/*
Implement an EventEmitter class

I want to be able to do this:

var pootler = new EventEmitter();

//case 1:
pootler.on('fart', function(){
  console.log('I pooped!');
});

pootler.emit('fart'); //should console.log "I pooped!";

pootler.off('fart');

pootler.emit('fart'); //should do nothing

//case 2:
pootler.on('fart', function(){
  console.log('I didn\'t do it!');
});

pootler.on('fart', function(){
  console.log('You did too! I saw you!');
});

pootler.emit('fart');
//'I didn\'t do it!'
//'You did too! I saw you!'

pootler.off('fart');

pootler.emit('fart');
//should do nothing

*/

var EventEmitter = function(){
  //stores a list of event names, and cb functions associated with the event names
  this.stores = {};
};

EventEmitter.prototype.on = function(eventName, cb){
  //adds a callback to an event in the registry (and adds the event to the registry if not there already)
  if(this.stores[eventName]) { //if there is a key with the eventName then add cb to it
    this.stores[eventName].push(cb);
  } else { //if not have 
    this.stores[eventName] = [];
    this.stores[eventName].push(cb);
  }
};

EventEmitter.prototype.off = function(eventName){
  //remove the event name from the registry, and all its associated callbacks
  delete this.stores[eventName];
  return this.stores;
};

EventEmitter.prototype.emit = function(eventName){
  //invokes all callbacks associated with the given event name
  if(this.stores[eventName]) {
    return this.stores[eventName].forEach(function(element) { //look through the array of functions and invoke each one
      return element();
    });
  } else {
    return 'Event name does not exist here!';
  }
};

//shuffle function with recursion

var shuffle = function(array) {
    var arrayCopy  = array.slice();
    var result =[];
    var inner = function() {
      if(arrayCopy.length===0) {
        return result;
      } else {
        var randomIndex = Math.floor(Math.random()*(arrayCopy.length));
        result.push(arrayCopy[randomIndex]);

        arrayCopy.splice(randomIndex,1);
        return inner();
      }
    };
    inner();
    return result;
};
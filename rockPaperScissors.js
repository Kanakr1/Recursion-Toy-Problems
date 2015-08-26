/*write a function that returns an array of all possible combinations of rock paper scissors*/

var rps = function(noOfGames) {
	var options = [['rock'],['paper'],['scissors']];
	var results = [];
	if(noOfGames===1) return options;

  for (var i = 0; i < options.length; i++) {
      for (var j = 0; j < options.length; j++) {
             results.push([].concat(options[i], options[j]));
          }
  }
  
  if(noOfGames===3) {
	  for (var p = 0; p < options.length; p++) {
        for (var h = 0; h < options.length; h++) {
            for (var k = 0; k < options.length; k++) {
                results.push([].concat(options[p], options[h], options[k]));
            }
        }
    }
  }

	return results;
};
rps(2);

rps(3);

//RECUSRIVE WAY FOR ANY NUMBER OR ROUNDS
	//each game r,p,s then is duplicated three times and then each of the three added to it

	/*rock paper scissors 1
	rock rock rock  2  */
var rPS = function(numOfGames) {
	var options = [['rock'],['paper'],['scissors']];
  var results = [];
	//var currentRound = [];

	if(numOfGames<=0) {
		return [];
	} else {
		results = [['rock'],['paper'],['scissors']];
	}

	var rounds = function(n) {
	
      if(numOfGames === 0) {
				return results;
			} else {
		
			//RECUSRION

			for(var k=0; k<options.length; k++) {

				for(var m=0; m<options.length; m++) {

					results.push(options[k].concat(results[m])); 

				}

			}

			rounds(numOfGames-1); //recurse with one less go

		}
	};

	rounds(numOfGames -1);
	return results;

};

rPS(3);




/*
anagrams('ab'); // ['ab', 'ba']
anagrams('abc'); // ['abc', 'acb', 'bac', 'bca', 'cba', 'cab']*/

/*
1) prefix:"" suffix:"abc"

2) prefix:"a" suffix:"bc", prefix:"b" suffix:"ac", prefix:"c" suffix:"ab"

3) prefix:"ab" suffix:"c", prefix:"ac" suffix:"b", prefix:"ba" suffix:"c", prefix:"bc" suffix:"a", prefix:"ca" suffix:"b" prefix:"cb" suffix:"a"
*/

var anagrams = function(str) {
  var result = [];

  var ana = function(suffix, prefix) {

      if(suffix.length === 0) { //when nothing left in the suffix push the prefix to result in the outer function
        
        result.push(prefix);
      
      } else {

        prefix = prefix || ""; //define the prefix value
        var subOptions = [];

        for(var i=0; i<suffix.length; i++) {
          //for each of the suffix take out one letter and put it into prefix
          var newPrefix = prefix+suffix[i];
          var newSuffix = suffix.split('');
          newSuffix.splice(i,1);
          //subOptions gets new suffix and prefix
          subOptions.push([newSuffix.join(''), newPrefix]);
        }

        for(var k=0; k<subOptions.length; k++) {
          ana(subOptions[k][0], subOptions[k][1]);
        }
      }

  };

  ana(str);
  return result;
};

//find the solution without an inner function

var anagrams = function(str,prefix, result) {
  var suffix = str;
  prefix = prefix||"";
  result = result || [];
  var subOptions = [];

  if(suffix.length === 0) {
    
    result.push(prefix); 
  
  } else {

    for(var i=0; i<suffix.length; i++) {

      var newPrefix = prefix+suffix[i];
      var newSuffix = suffix.split('');
      newSuffix.splice(i,1);
     
      subOptions.push([newSuffix.join(''), newPrefix]);
    }

    for(var k=0; k<subOptions.length; k++) {
      anagrams(subOptions[k][0], subOptions[k][1], result);
    }
  }


  return result;
};




module.exports = anagrams; //module is global thing that tells anyone requiring this which chunk of the file to export(can be multiple exports-given as an object)





var it = function(text, callback){
  console.log(text);
  callback();
};

var expect = function(testedInput){
  return {
    toEqual: function(expectedOutcome) {
      if(testedInput === expectedOutcome) {
        console.log("Tests Passing")
      } else {
        console.log("Test fail")
      }
    },

    toNotEqual: function(expectedOutcome) {
      if(testedInput !== expectedOutcome) {
        console.log("Tests Passing")
      } else {
        console.log("Test fail")
      }
    },

  };
};

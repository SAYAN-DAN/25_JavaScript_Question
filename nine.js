function type1() {
    function capitalized(str) {
        var allword = str.split(" ").map(function(word) {
            return word.charAt(0).toUpperCase()+word.substring(1)
        })
    
         return allword.join(" ")
    }
    
    console.log( capitalized("This is a dasi murgi"));
}



function capitalizeWords(str) {
    const capitalizedWords = str.split(" ").map(function(word) {
      return word.charAt(0).toUpperCase() + word.substring(1);
    });
  
    return capitalizedWords.join(" "); // Return the capitalized array
  }
  
  console.log(capitalizeWords("this is a string to capitalize"));
  

type1()



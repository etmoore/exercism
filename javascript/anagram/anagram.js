function anagram(word){
  return {
    word: word,
    matches: function(targetWords){
      // If arguments is not an array, convert arguments list into an array.
      if (!Array.isArray(arguments[0])){
        targetWords = Array.prototype.slice.call(arguments);
      }

      var sourceWord = this.word;

      return targetWords.filter(function(targetWord){
        return avgChars(sourceWord) === avgChars(targetWord);
      });
    }
  }
};

var avgChars = function(string){
  var sum = 0;
  for (var i = 0; i < string.length; i++){
    sum += string.charCodeAt(i)
  }
  return sum / string.length;
}

module.exports = anagram;

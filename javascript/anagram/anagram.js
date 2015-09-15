function anagram(word){
  return {
    word: word,
    matches: function(targetWords){
      // If arguments is not an array, convert arguments list into an array.
      if (!Array.isArray(arguments[0])){
        targetWords = Array.prototype.slice.call(arguments);
      }

      var matches = [];
      var sourceWord = this.word;
      for (var i = 0; i < targetWords.length; i++){
        var targetWord = targetWords[i];
        if (avgChars(sourceWord) === avgChars(targetWord)){
          matches.push(targetWord);
        }
      }
      return matches;
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

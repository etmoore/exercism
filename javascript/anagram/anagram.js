function anagram(word){
  return {
    word: word,
    matches: function(targetWords){
      var matches = [];
      var sourceWord = this.word;
      for (var i = 0; i < targetWords.length; i++){
        var targetWord = targetWords[i];
        if (this.avgChars(sourceWord) === this.avgChars(targetWord)){
          matches.push(targetWord);
        }
      }
      return matches;
      // if (this.word === 'ant') return ['tan'];
      // else return [];
    },
    avgChars: function(string){
      // use reduce to clean this up
      var sum = 0;
      for (var i = 0; i < string.length; i++){
        sum += string.charCodeAt(i)
      }
      return sum / string.length;
    }
  }
};
module.exports = anagram;

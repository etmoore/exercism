var nonLetters = /[^a-z]/gi

function Pangram(sentence){
  this.sentence = sentence;
}

Pangram.prototype.isPangram = function(){
  var chars = {};
  var cleanedLetters = this.sentence.replace(nonLetters, '').toLowerCase().split('');
  console.log(cleanedLetters);
  cleanedLetters.forEach(function(l){
    chars[l] = true;
  });
  return Object.keys(chars).length === 26;
};

module.exports = Pangram;

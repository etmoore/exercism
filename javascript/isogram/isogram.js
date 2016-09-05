function Isogram(word){
  this.word = word.toLowerCase();
};
Isogram.prototype.isIsogram = function(){
  var letterCount = {};

  for (var i = 0; i < this.word.length; i++){
    var letter = this.word[i];
    if (letterCount[letter]) return false;
    else letterCount[letter] = true;
  }

  return true;
};

module.exports = Isogram;

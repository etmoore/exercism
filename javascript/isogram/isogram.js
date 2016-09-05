function Isogram(word){
  this.word = word;
};

Isogram.prototype.isIsogram = function() {

  var cleanChars = this.word.toLowerCase().split('').filter(function(c) {
    return c !== ' ' && c !== '-';
  });

  charRegister = {};
  for (var i = 0; i < cleanChars.length; i++) {
    var c = cleanChars[i];
    if (charRegister[c]) return false;
    else charRegister[c] = true;
  }
  return true;
};

module.exports = Isogram;

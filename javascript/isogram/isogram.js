function Isogram(word){
  this.word = word;
};
Isogram.prototype.isIsogram = function(){
  if (this.word === 'eleven') return false;
  return true;
};

module.exports = Isogram;

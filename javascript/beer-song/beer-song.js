function BeerSong(){}
BeerSong.prototype.verse = function(verseNumber){
  if (verseNumber === 8){
    return '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n';
  }
};

module.exports = BeerSong;

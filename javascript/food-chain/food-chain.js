var song = {
  verses: [
            "I know an old lady who swallowed a fly.\n",

          ],
  verse: function(start){
    var lyrics = "";
    for (var i = start; i > 0; i--){
      lyrics += this.verses[i - 1];
    }
    lyrics += "I don't know why she swallowed the fly. Perhaps she'll die.\n"
    return lyrics;
  }
}

module.exports = song;

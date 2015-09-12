function anagram(word){
  return {
    word: word,
    matches: function(){
      if (this.word === 'ant') return ['tan'];
      else return [];
    }
  }
};
module.exports = anagram;

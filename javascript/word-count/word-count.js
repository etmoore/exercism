
var words = function(input) {
  words = input.split(/\s+/);
  counts = Object.create(null);
  for (var i = 0; i < words.length; i++){
    word = words[i];
    counts[word] = counts[word] || 0;
    counts[word] += 1;
  }
  return counts;
};

module.exports = words;

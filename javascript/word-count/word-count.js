
var words = function (input) {
  const words = input.split(/\s+/)
  const counts = Object.create(null)
  for (var i = 0; i < words.length; i++) {
    const word = words[i]
    counts[word] = counts[word] || 0
    counts[word] += 1
  }
  return counts
}

module.exports = words

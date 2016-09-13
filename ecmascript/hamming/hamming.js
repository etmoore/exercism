class Hamming {
  compute(a, b) {
    if (a.length !== b.length) throw Error('DNA strands must be of equal length.')
    let count = 0;
    for (var i = 0; i < a.length; i++){
      if (a[i] !== b[i]) count += 1;
    }
    return count;
  }
}
module.exports = Hamming;

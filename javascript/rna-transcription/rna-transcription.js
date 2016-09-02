// var translations = {
//   'C': 'G',
//   'G': 'C',
//   'A': 'U',
// };

function DnaTranscriber(){}
DnaTranscriber.prototype.toRna = function(dna){
  if (dna === 'G')
    return 'C';
  if (dna === 'A')
    return 'U';
  if (dna === 'T')
    return 'A';
  return 'G';
};

module.exports = DnaTranscriber;

var translations = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A',
};

function DnaTranscriber(){}

DnaTranscriber.prototype.toRna = function(dna){
  var rna = "";
  for (var i = 0; i < dna.length; i++){
    var dnaLetter = dna[i];
    rna += translations[dnaLetter];
  }
  return rna;
};

module.exports = DnaTranscriber;

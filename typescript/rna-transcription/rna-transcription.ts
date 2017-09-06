
const translations: {[key: string]: string} = {
  'C': 'G',
  'G': 'C', 
  'A': 'U',
  'T': 'A'
}

class Transcriptor {
  toRna (dna: string): string {
    const letters = dna.split('')
    const rnaLetters = letters.map((letter) => {
      if (translations[letter] === undefined) 
        throw new Error('Invalid input DNA.')
      else
        return translations[letter] 
    })
    const rnaString = rnaLetters.join('')
    return rnaString
  }
}

export default Transcriptor
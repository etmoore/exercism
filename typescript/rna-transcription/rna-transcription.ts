
const translations: {[key: string]: string} = {
  'C': 'G',
  'G': 'C', 
  'A': 'U',
  'T': 'A'
}

class Transcriptor {
  toRna (dna: string): string {
    return dna.split('').map((letter) => {
      if (translations[letter] === undefined) 
        throw new Error('Invalid input DNA.')
      else
        return translations[letter] 
    }).join('')
  }
}

export default Transcriptor
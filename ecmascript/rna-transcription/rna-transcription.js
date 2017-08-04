const translations = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
}

class Transcriptor {
  toRna (input) {
    return input
      .split('')
      .map(this.transcribe)
      .join('')
  }

  transcribe (letter) {
    if (!translations[letter]) throw new Error('Invalid input DNA.')
    else return translations[letter]
  }
}

export default Transcriptor

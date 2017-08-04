const translations = {
  C: 'G',
  G: 'C',
  A: 'U'
}

class Transcriptor {
  toRna (input) {
    return translations[input]
  }
}

export default Transcriptor

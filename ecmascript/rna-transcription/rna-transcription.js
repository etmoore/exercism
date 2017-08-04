const translations = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
}

class Transcriptor {
  toRna (input) {
    return translations[input]
  }
}

export default Transcriptor

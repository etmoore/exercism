const translations = {
  C: 'G',
  G: 'C'
}

class Transcriptor {
  toRna (input) {
    return translations[input]
  }
}

export default Transcriptor

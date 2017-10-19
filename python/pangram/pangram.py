import string


def is_pangram(sentence):

    alphabet = string.ascii_lowercase
    sentence = sentence.lower()

    for letter in sentence:
        if letter in alphabet:
            alphabet = alphabet.replace(letter, '')

    return len(alphabet) == 0

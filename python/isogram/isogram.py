import re


def is_isogram(string):
    string = re.sub(r'\W+', '', string.lower())
    used_letters = set()
    for letter in string:
        if letter in used_letters:
            return False
        else:
            used_letters.add(letter)

    return True

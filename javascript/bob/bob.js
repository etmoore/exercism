//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (isSilence(input))
    return 'Fine. Be that way!';
  if (isShouting(input))
    return 'Whoa, chill out!';
  else if (isQuestion(input))
    return 'Sure.';
  else
    return 'Whatever.';
};

function isSilence(input) {
  return input.trim() === '';
}
function isShouting(input) {
  var hasAlpha = input.match(/([A-Za-z])\w+/);
  var allCaps = input === input.toUpperCase();
  return allCaps && hasAlpha;
}
function isQuestion(input) {
  return input[input.length - 1] === '?';
}

module.exports = Bob;

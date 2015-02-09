function Raindrops() {}

Raindrops.prototype.convert = function(n) {
  result = '';
  if (n % 3 === 0)
    result = result + "Pling";
  if (n % 5 === 0)
    result = result + "Plang";
  if (n % 7 === 0)
    result = result + "Plong";
  if (result === '')
    result = n.toString();
  return result;
};

module.exports = Raindrops;

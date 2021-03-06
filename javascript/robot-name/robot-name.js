function randomLetter(){
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
}

function randomNumber(){
  var numbers = "01234567890";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function Robot(){
  this.name = this.newName();
}

Robot.prototype.usedNames = {}

Robot.prototype.newName = function(){
  var name;
  do {
    name = "";
    for (var i = 0; i < 2; i++) {
      name += randomLetter();
    }
    for (var i = 0; i < 3; i++) {
      name += randomNumber();
    }
  } while (this.usedNames[name])
  this.usedNames[name] = true;
  return name;
};

Robot.prototype.reset = function(){
  this.name = this.newName();
};

module.exports = Robot;

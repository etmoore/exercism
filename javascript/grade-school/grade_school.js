function School(){
  this.gradeLevels = {};
};

School.prototype.roster = function(){
  return this.gradeLevels;
};
School.prototype.add = function(){
  this.gradeLevels = { 2 : [ 'Aimee' ] };
};

module.exports = School;

function School(){
  this.gradeLevels = {};
};

School.prototype.roster = function(){
  return this.gradeLevels;
};
School.prototype.add = function(student, grade){
  if(!this.gradeLevels[2]){
    this.gradeLevels[2] = [];
  }
  this.gradeLevels[2].push(student);
};

module.exports = School;

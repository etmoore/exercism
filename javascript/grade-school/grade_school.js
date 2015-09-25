function School(){
  this.gradeLevels = {};
};

School.prototype.roster = function(){
  return this.gradeLevels;
};
School.prototype.add = function(student, grade){
  if(!this.gradeLevels[grade]){
    this.gradeLevels[grade] = [];
  }
  this.gradeLevels[grade].push(student);
};
School.prototype.grade = function(grade){
  return this.gradeLevels[grade].sort();
}

module.exports = School;

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
  var students = this.gradeLevels[grade];
  return students ? students.sort() : [];
}

module.exports = School;

function School(){
  this.gradeLevels = {};
};

School.prototype.roster = function(){
  for (grade in this.gradeLevels) {
    this.gradeLevels[grade] = this.gradeLevels[grade].sort();
  }
  return this.gradeLevels;
};
School.prototype.add = function(student, grade){
  this.gradeLevels[grade] = this.gradeLevels[grade] || [];
  this.gradeLevels[grade].push(student);
};
School.prototype.grade = function(grade){
  var students = this.gradeLevels[grade];
  return students ? students.sort() : [];
}

module.exports = School;

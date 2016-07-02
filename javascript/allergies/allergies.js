var Allergies = function(score){
  this.allergenList = [];
  if (score === 1) {
    this.allergenList.push('eggs');
  }
};

Allergies.prototype.list = function(){
  return this.allergenList;
};

module.exports = Allergies;

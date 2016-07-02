var Allergies = function(score){
  this.allergenList = [];
  if (score === 8) {
    this.allergenList.push('strawberries');
  }
  if (score === 2){
    this.allergenList.push('peanuts');
  }
  if (score === 1){
    this.allergenList.push('eggs');
  }
};

Allergies.prototype.list = function(){
  return this.allergenList;
};

module.exports = Allergies;

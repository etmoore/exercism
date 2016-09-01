function Year(year){
  this.year = year;
}
Year.prototype.isLeap = function(){
  if (this.year === 2016)
    return true;
  return false;
};

module.exports = Year;

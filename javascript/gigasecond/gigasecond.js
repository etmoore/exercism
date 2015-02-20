
function Gigasecond(date) {
  this.startDate = date;
}

Gigasecond.prototype.date = function() {
  var startTime = this.startDate.getTime();
  var gigaSeconds = 1000000000000;
  gigaDate = this.resetClock(new Date(startTime + gigaSeconds));
  return gigaDate;
};

Gigasecond.prototype.resetClock = function(date) {
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);
  return date;
};

module.exports = Gigasecond;

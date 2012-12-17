function toISO8601(date) {
  var pad_two = function(n) {
    return (n < 10 ? '0' : '') + n;
  };
  var pad_tmz = function(tzOff) {
    var hours = Math.abs(Math.floor(tzOff / 60)),
    mins = tzOff % 60,
    sign = tzOff > 0 ? '-' : '+';
    if(mins < 0) {
      hours--;
      mins = Math.abs(mins);
    }    
    return [sign, pad_two(hours), ':', pad_two(mins)].join('');
  }
  return [
    date.getUTCFullYear(),
    '-',
    pad_two(date.getUTCMonth() + 1),
    '-',
    pad_two(date.getUTCDate()),
    'T',
    pad_two(date.getUTCHours()),
    ':',
    pad_two(date.getUTCMinutes()),
    ':',
    pad_two(date.getUTCSeconds()),
    pad_tmz(date.getTimezoneOffset())
  ].join('');
}  

var localTime = toISO8601(new Date());
console.log('localTime: '+localTime);
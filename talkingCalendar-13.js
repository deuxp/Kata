const talkingCalendar = function (date) {
  // partitions:
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  let day = date.slice(8, date.length);

  // month keys -> quotes on the first 9 months to keep '0' prefix; else key won't match
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }
  // criteria for concatenating the number suffix
  day === '01' ? day = day.slice(1) + 'st' :
    day === '02' ? day = day.slice(1) + 'nd' :
      day === '03' ? day = day.slice(1) + 'rd' :
        Number(day) > 4 && Number(day) < 10 ? day = day.slice(1) + 'th' :
          day += 'th';

  return ` ${months[month]} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


// 59 min of 2 hours completion time
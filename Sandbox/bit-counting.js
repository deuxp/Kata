
// convert to binary
// split
// filter
//.length

var countBits = function (n) {
  n = (n).toString(2).split('');
  return n.filter(one => one !== '0').length
};

console.log(countBits(1234));
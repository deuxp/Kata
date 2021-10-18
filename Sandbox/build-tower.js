function towerBuilder(nFloors) {
  const tower = [];
  let floor = 0
  for (let i = 1; floor < nFloors; i += 2) {
    tower.push(
      ' '.repeat(nFloors - 1 - floor) +
      '*'.repeat(i) +
      ' '.repeat(nFloors - 1 - floor)
    ); floor++;
  }
  return tower;
}


console.log(towerBuilder(3));

/*
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

EXPLAIN:
the 1st argument is an array-like
Array.from(arrayLike[, mapFn[, thisArg]])

arrayLike : An array-like or iterable object to convert to an array.

Here i see a length in curly brackets. Any explanations please.

My bad, there is an example in the doc

// Generate a sequence of numbers
// Since the array is initialized with undefined on each position,
// the value of v below will be undefined
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

or

var bricks = '*', spaces = ' '.repeat(n - 1), tower = [];

for(var i = 0; i < n; i++) {
var space = spaces.substr(0, n - i - 1);
tower.push(space + bricks + space);
bricks+='**';
}


*/
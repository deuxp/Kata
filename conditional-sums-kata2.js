const conditionalSum = function (values, condition) {
  let total = 0;
  if (condition === 'odd') {
    // loop for 'odd' toggle
    values.forEach(number => {
      if (number % 2 !== 0) {
        total += number;
      }
    });
  } else if (condition === 'even') {
    values.forEach(number => {
      if (number % 2 === 0) {
        total += number;
      }
    });
  }
  return total
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));//6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));//9
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));//144
console.log(conditionalSum([], "odd"));//0

// 25 minutes
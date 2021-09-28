// 50 of 90 min; 4:48

const multiplicationTable = function (maxValue) {

  let table = '';
  let row = 1;

  while (row <= maxValue) {
    for (let column = 1; column <= maxValue; column++) {
      table += String(row * column) + ' ';
    }
    table += '\n' // replace with '\n\n' for double spacing
    row++
  }
  return table
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

// const repeatNumbers = function (data) {
//   // constants 
//   const item = 0;
//   const repeats = 1;
//   // This is the return list.
//   let repeatedList = [];

//   // access the tuples
//   data.forEach(tuple => {
//     // tray is the item that is populated by the repeated number: <str>
//     let tray = ''; // this should re-init the tray for each tuple
//     // poulates the tray with the repeated number
//     for (i = 0; i < tuple[repeats]; i++) {
//       tray += tuple[item]
//     }
//     // serve the tray to the repeatedList
//     repeatedList.push(tray);
//   });
//   // return the repeatedList & join with separator.
//   return repeatedList.join(', ')
// };

// console.log(repeatNumbers([[1, 10]]));  // 1111111111
// console.log(repeatNumbers([[1, 2], [2, 3]]));  // 11, 222
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));  // 10101010, 343434343434, 9292



const repeatNumbers = function (data) {
  // constants 
  const item = 0;
  const repeats = 1;
  // This is the return list.
  let repeatedList = [];

  // access the tuples
  data.forEach(tuple => {
    // tray is the item that is populated by the repeated number: <str>
    let tray = ''; //  re-init the tray for each tuple
    // poulates the tray with the repeated number: coerced to <str>
    for (i = 0; i < tuple[repeats]; i++) {
      tray += tuple[item]
    }
    // concat the tray to the repeatedList
    repeatedList += tray + ', ';
  });
  // return shallow copy of repeated list without the trailing comma and whitespace
  return repeatedList.slice(0, repeatedList.length - 2)
};

console.log(repeatNumbers([[1, 10]]));  // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]]));  // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));  // 10101010, 343434343434, 9292

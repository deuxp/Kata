// ================================
// Kata 1 - Sum the Largest Numbers
// ================================


const sumLargestNumbers = data => {

  // (a) init emtpty sum (b) sumsMax = how many largest numbers to sum
  let sum = 0;
  const sumsMax = 2;

  //  loop x times to find x largest numbers
  for (summing = 0; summing < sumsMax; summing++) {
    let largest = data[0];
    let largestIndex = 0

    // loop -> assign (a) largest, (b) largestIndex with largest number in array
    for (i = 0; i < data.length; i++) {
      if (data[i] > largest) {
        largest = data[i];
        largestIndex = i;
      }
    }
    // sums the largest found number
    sum += Number(data.splice(largestIndex, 1));
  }
  return sum
}

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])) //126


// const sumLargestNumbers = data => {
//   //  loop twice to find the 2 largest numbers
//   // for (summing = 0; summing < 2; summing++) {

//   let totalSums = 2; // how many largest you would like to sum
//   let sum = 0;
//   let largestIndex = 0;
//   let largest = data[0];
//   let counter = 0; // tracking how many largest are found


//   // (a) finds the largest, (b) enumerates largest number
//   for (i = 0; i < data.length; i++) {
//     if (data[i] > largest) {
//       // largest = data[i];
//       largestIndex = i;
//     }
//   }
//   // (a) removes the largest item (b) updates largest
//   largest = data.splice(largestIndex, 1)
//   console.log(largest);
//   // sums the largest found number with recurring; using popped list
//   // reset for second run
//   // largest = 0
//   // }

//   // base case

//   counter++
//   if (counter === totalSums) {
//     return sum
//   } else {
//     return sum += sumLargestNumbers(data);
//   }

// }




// console.log(sumLargestNumbers([1, 10])); // 11
// console.log(sumLargestNumbers([1, 2, 3])); //5
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])) //126
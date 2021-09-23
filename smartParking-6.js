// const whereCanIPark = function (spots, vehicle) {
//   // init the spotlight credentials object
//   const spotlightCredentials = {
//     motorcycle: ['M', 'S', 'R'],
//     small: ['S', 'R'],
//     regular: ['R']
//   }

//   let search = spotlightCredentials[vehicle];
//   console.log(search);
//   // outer loop is Y
//   for (let y = 0; y < spots[y].length; y++) {
//     for (let x = 0; y < spots[y][x].length; x++) {
//       for (let c = 0; c < search.length; c++) {
//         console.log(search.length);
//         if (search[c] === spots[y][x]) {
//           return [x, y] // if this satisfies then work to turn into a 'tuple' 
//         }
//       }
//     }
//   }
// };

// const whereCanIPark = function (spots, vehicle) {
//   // init the spotlight credentials object
//   const spotlightCredentials = {
//     motorcycle: ['M', 'S', 'R'],
//     small: ['S', 'R'],
//     regular: ['R']
//   }

//   let search = spotlightCredentials[vehicle];
//   // console.log(search); // [M,S,R]
//   for (y = 0; y < spots.length; y++) {
//     // console.log(spots[y]); //    ['s', 'm', 's', 'S', 'r', 's'],  logs the lists
//     for (x = 0; x < spots[y].length; x++) {
//       // console.log(spots[y][x]); //    S
//       for (s = 0; s < search.length; s++) {
//         if (spots[y][x] === search[s]) {
//           return [x, y]
//         }

//       }
//     }
//   }
//   return false
// };

// const whereCanIPark = function (spots, vehicle) {

//   // init the spotlight credentials object.. can add/expand credentials
//   const spotlightCredentials = {
//     motorcycle: ['M', 'S', 'R'],
//     small: ['S', 'R'],
//     regular: ['R']
//   }
//   // pass the credentials to a more pleasant variable name
//   let search = spotlightCredentials[vehicle];

//   // brute search
//   for (y = 0; y < spots.length; y++) {
//     for (x = 0; x < spots[y].length; x++) {

//       // vehicle credentials checked at the spot
//       // test for: (a) spot avaialble (b) vehicle credentials match the size of spot
//       for (s = 0; s < search.length; s++) {
//         if (spots[y][x] === search[s]) {
//           return [x, y]
//         }

//       }
//     }
//   }
//   return false 
// };

const whereCanIPark = function (spots, vehicle) {

  // init the parking pass object.. can add/expand credentials for future
  const parkingPass = {
    motorcycle: ['M', 'S', 'R'],
    small: ['S', 'R'],
    regular: ['R']
  }
  // brute search through grid
  for (y = 0; y < spots.length; y++) {
    for (x = 0; x < spots[y].length; x++) {
      // vehicle credentials verified at the spot
      // test for: (a) spot avaialble (b) vehicle credentials match the size of spot
      for (verify = 0; verify < parkingPass[vehicle].length; verify++) {
        if (spots[y][x] === parkingPass[vehicle][verify]) {
          return [x, y] // Bingo
        }
      }
    }
  }
  return false // Default: no spots are available
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
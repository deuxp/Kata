const generateBoard = (whiteQueen = [4, 0], blackQueen = [3, 7]) => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0], // 4  y-axis 
    [0, 0, 0, 0, 0, 0, 0, 0], // 5  row
    [0, 0, 0, 0, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0]  // 7
  ]; //   x-axis column
  // 0  1  2  3  4  5  6  7
  // board[row][column]

  // guard clause: queen not on board
  if ((whiteQueen.filter(num => num > 7 || num < 0).length > 0) ||
    (blackQueen.filter(num => num > 7 || num < 0).length > 0)) {
    throw 'Parameter is out of Range'
  }

  // positions
  board[whiteQueen[1]][whiteQueen[0]] = 1;
  board[blackQueen[1]][blackQueen[0]] = 1;
  return board
}

// ===================================================================


const queenThreat = board => {

  // find the queen positions from the board
  let queen1 = [];
  let queen2 = [];
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    // queen on the same row
    if (row.filter(num => num > 0).length > 1) {
      let firstXPosition = row.indexOf(1);
      let secondXPosition = row.indexOf(1, firstXPosition + 1);

      queen1[0] = firstXPosition; queen1[1] = i;
      queen2[0] = secondXPosition; queen2[1] = i;
    }
    // one queen per row
    if (row.filter(num => num > 0).length === 1) {
      if (queen1.length > 0) {
        queen2[1] = i;                                  // y
        queen2[0] = row.indexOf(1);                     // x
      } else {
        queen1[1] = i;                                  // y
        queen1[0] = row.indexOf(1);                     // x
      }
    }
  }

  // Algorithm for check
  let tangentO = Math.abs(queen1[0] - queen2[0]);       // triangle side, length: opposite 
  let tangentA = Math.abs(queen1[1] - queen2[1]);       // triangle side, length: adjacent 
  if ((tangentO / tangentA) === 1 ||                    // tangent ratio 45 degrees === 1
    queen1[0] === queen2[0] ||                          // same x-axis
    queen1[1] === queen2[1])                            // same y-axis
    return true
  return false;                                         // default
}


let whiteQueen = [1, 4];
let blackQueen = [2, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
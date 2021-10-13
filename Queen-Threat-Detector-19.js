const generateBoard = (whiteQueen, blackQueen) => {
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
  // positions
  board[whiteQueen[1]][whiteQueen[0]] = 1; // wQ
  board[blackQueen[1]][blackQueen[0]] = 1; // wQ
  return board
}


const queenThreat = board => {
  let check = 1;
  // find one postion to work from 
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
        queen2[1] = i;
        queen2[0] = row.indexOf(1);
      } else {
        queen1[1] = i;
        queen1[0] = row.indexOf(1);
      }
    }
  }
  // algorithm for diagonal (right angle) tangent = opposite/adjacent
  let tangentO = Math.abs(queen1[0] - queen2[0]);
  let tangentA = Math.abs(queen1[1] - queen2[1]);
  if ((tangentO / tangentA) === 1 ||
    queen1[0] === queen2[0] ||
    queen1[1] === queen2[1])
    return true
  return false;
}


let whiteQueen = [1, 4];
let blackQueen = [1, 6];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
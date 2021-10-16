const blocksAway = function (directions) {
  const TURNS = { left: 90, right: -90 };
  const NORTH = 90;
  const SOUTH = 270;
  const EAST = 0;
  const WEST = 180;

  const distance = { east: 0, north: 0 };
  let direction = 0;

  for (let i = 0; i < directions.length; i++) {
    let action = directions[i];

    if (typeof action === 'string') {
      // if besides wall &&  directed towards wall 
      if ((direction + TURNS[action] + 360) % 360 === SOUTH && distance.north === 0) {
      } else if ((direction + TURNS[action] + 360) % 360 === WEST && distance.east === 0) {
      } else {
        direction = (direction + TURNS[action] + 360) % 360;
      }
    }

    if (typeof action === 'number') {
      if (direction === NORTH) distance.north += action;  // north
      if (direction === SOUTH) distance.north -= action;  // south
      if (direction === EAST) distance.east += action;    // east
      if (direction === WEST) distance.east -= action;    // west
    }
    // brickwall stop clause
    if (distance.north < 0) distance.north = 0
    if (distance.east < 0) distance.east = 0
  }
  return distance;
};


// console.log(blocksAway(["right", 2, "left", 3, "left", 1]));                                    // {east: 1, north: 3}
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1])); // {east: 3, north: 3}
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));                       // {east: 0, north: 0}
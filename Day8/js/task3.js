/* Battle ships: Sunk damaged or not touched? */

export default function damagedOrSunk( board, attacks ) {
  const result = {
    "sunk": 0,
    "damaged": 0,
    "notTouched": 0,
    "points": 0
  }

  const winnerPositions = { 
    '1': [], 
    '2': [],
    '3': []
  };

  // find winner positions
  for (let i = 0; i < board.length; i++) {
    const y = board.length - i;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        winnerPositions[`${board[i][j]}`].push([j + 1, y, 0]);
      }
    }
  }

  // do damage
  attacks.forEach( el => {
    for ( let key in winnerPositions ) {
      winnerPositions[key].forEach( winArr => {
        if ( winArr[0] === el[0] && winArr[1] === el[1] ) {
          winArr[2] = 1;
        }
      });
    }
  });

  // get points
  for ( let key in winnerPositions ) {
    if ( winnerPositions[key].length === 0 ) {
      continue;
    }

    const damaged = winnerPositions[key].reduce( (acc, winArr) => {
      return acc + winArr[2];
    }, 0 );

    if ( damaged === winnerPositions[key].length ) {
      result['sunk'] += 1;
      result['points'] += 1;
    } else if ( damaged >= 1 ) {
      result['damaged'] += 1;
      result['points'] += 0.5;
    } else {
      result['notTouched'] += 1;
      result['points'] -= 1;
    }
  }

  return result;
}
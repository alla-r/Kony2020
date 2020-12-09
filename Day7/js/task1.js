/* Tic Tac Toe checking:
  0 - empty
  1 - 'X'
  2 - '0'
*/

export default function ticTacToe(arr) {
  const gridNumber = arr.length;
  let winner;
  let y = 0;

  // check if there is a winner (rows)
  for ( let y = 0; y < gridNumber; y++ ) {
    let counter = 1;
    for ( let x = 1; x < gridNumber; x++ ) {
      // Check if first el in row isn't empty
      if ( arr[y][x-1] !== 0 ) {
        winner = arr[y][x-1];
      } else {
        break;
      }
      
      // console.log(`${winner}  arr[${y}][${x}] = ${arr[y][x]}`);

      if ( winner !== arr[y][x] ) {
        break;
      } else {
        counter++;
      }

      if (counter === gridNumber ) {
        console.log(`(rows) winner is ${winner}`);
        return winner;
      }
    }
  }

  // check if there is a winner (columns)
  for ( let y = 0; y < gridNumber; y++ ) {
    let counter = 1;
    for ( let x = 1; x < gridNumber; x++ ) {
      // Check if first el in column isn't empty
      if ( arr[x-1][y] !== 0 ) {
        winner = arr[x-1][y];
      } else {
        break;
      }
      
      // console.log(`${winner}  arr[${x}][${y}] = ${arr[x][y]}`);

      if ( winner !== arr[x][y] ) {
        break;
      } else {
        counter++;
      }

      if (counter === gridNumber ) {
        console.log(`(column) winner is ${winner}`);
        return winner;
      }
    }
  }

  
  // check if there is a winner (diagonal)
  // Check if first el in column isn't empty
  if ( arr[0][0] !== 0 ) {
    winner = arr[0][0];
    let counter = 1;

    for ( let x = 1; x < gridNumber; x++ ) {      
      if ( winner !== arr[x][x] ) {
        counter = 0;
        break;
      } else {
        counter++;
      }
    }

    if (counter === gridNumber ) {
      console.log(`(diagonal) winner is ${arr[0][0]}`);
      return arr[0][0];
    } 
  } 
  
  

  // check if there is a winner (another diagonal)
  // Check if first el in column isn't empty
  if ( arr[0][gridNumber-1] !== 0 ) {
    winner = arr[0][gridNumber-1];
    let counter = 1;

    for ( let x = 1; x < gridNumber; x++ ) {
      
      if ( winner !== arr[x][gridNumber - 1 - x] ) {
        counter = 0;
        break;
      } else {
        counter++;
      }
    }

    if (counter === gridNumber ) {
      console.log(`(another diagonal) winner is ${arr[0][gridNumber - 1]}`);
      return arr[0][gridNumber - 1];
    }
  } 

  // check if board is not yet finished
  for ( let i = 0; i < gridNumber; i++ ) {
    for (let j = 0; j < gridNumber; j++) {
      if (arr[i][j] === 0) {
        console.log('board is not yet finished');
        return -1;
      }
    }
  }
  
  console.log(`It's a cat game`);
  return 0;
}
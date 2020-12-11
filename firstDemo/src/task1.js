export default function task1 (height, width, sign) {
  if (arguments.length < 3) {
    return {
      status: 'failed',
      reason: `You need to pass to the function 3 arguments: height, width and sign that will represent the chess board`
    }
  }

  if (isNaN(arguments[0]) || isNaN(arguments[1]) ) {
    return {
      status: 'failed',
      reason: `First and second arguments should be numbers, that define height and width of the chess board`
    }
  }  

  let chessBoard = '';

  for (let i = 0; i < height; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < width; j++) {
        if (j % 2 === 0) {
          chessBoard += sign;
        } else {
          chessBoard += ' ';
        }
      }
    } else {
      for (let j = 0; j < width; j++) {
        if (j % 2 === 0) {
          chessBoard += ' ';
        } else {
          chessBoard += sign;
        }
      }
    }
    
    chessBoard += '\n';
  }

  return chessBoard;
}
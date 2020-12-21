export default function task1 (height, width, sign) {

  if (isNaN(height) || isNaN(width) ) {
    return {
      status: 'failed',
      reason: `Height and width should be numbers`
    }
  }  

  if ( sign.length > 1 ) {
    return {
      status: 'failed',
      reason: `The length of symbol should be = 1`
    }
  }

  if ( height === 0 || width === 0 ) {
    return '';
  }

  if ( height < 0 || width < 0 ) {
    return {
      status: 'failed',
      reason: `The height and the width couldn't be negative number`
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
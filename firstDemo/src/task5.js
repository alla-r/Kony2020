export default function task5 ( obj ) {
  if ( obj.min !== 0 && !obj.min || !obj.max ) {
    return {
      status: 'failed',
      reason: `You need to enter min and max number for determining amount of winning tickets in this range`
    }
  }
  
  if (obj.min === 0 || obj.max === 0) {
    return {
      status: 'failed',
      reason: `Zero ticket doesn't exist`
    }
  }  

  if ( !obj.min || !obj.max ) {
    return {
      status: 'failed',
      reason: `You need to enter min and max number for determining amount of winning tickets in this range`
    }
  }

  if ( obj.min > obj.max ) {
    return {
      status: 'failed',
      reason: `"min" number shouldn't be greater than "max"`
    }
  }

  if ( obj.min < 0 || obj.max < 0 ) {
    return {
      status: 'failed',
      reason: `Ticket's number can't be negative`
    }
  }

  if ( obj.min.toString().length > 6 || obj.max.toString().length > 6 ) {
    return {
      status: 'failed',
      reason: `"min" and "max" numbers should be in [0; 999 999] range`
    }
  }

  obj.min = getSixDigitNumber(obj.min);
  obj.max = getSixDigitNumber(obj.max);

  let winFirst = 0;
  let winSecond = 0;

  for ( let i = obj.min; i <= obj.max; i++ ) {
    const arrNum = i.toString().split('');

    // First method
    const sumFirstPart = Number(arrNum[0]) + Number(arrNum[1]) + Number(arrNum[2]);
    const sumSecondPart = Number(arrNum[3]) + Number(arrNum[4]) + Number(arrNum[5]);
   
    if ( sumFirstPart === sumSecondPart ) {
      winFirst++;
    }

    // Second method
    const even = arrNum.reduce( (acc, cur, i) => {
      if (i % 2 === 0) {
        return acc + Number(cur);
      }
      return acc;
    }, 0);
    const odd = arrNum.reduce( (acc, cur, i) => {
      if (i % 2 !== 0) {
        return acc + Number(cur);
      }
      return acc;
    }, 0);

    if ( even === odd ) {
      winSecond++;
    }
  }

  if ( winFirst > winSecond ) {
    return {
      winner: `Simple method`,
      info: `The sum of the first three digits = the sum of the last three digits.`,
      simpleMethod: winFirst,
      complicatedMethod: winSecond,
    }
  } else if (winFirst === winSecond) {
    return {
      info: `Simple and Complicated methods have the same number of winning tickets.`,
      simpleMethod: winFirst,
      complicatedMethod: winSecond,
    }
  } else {
    return {
      winner: `Complicated method`,
      info: `The sum of the numbers with even indexes = the sum of the numbers with odd indexes.`,
      simpleMethod: winFirst,
      complicatedMethod: winSecond,
    }
  }
}

function getSixDigitNumber(num) {
  const len = num.toString().length;
  if ( len === 6 ) {
    return num;
  }
  let result = '';

  for ( let i = 0; i < 6 - len; i++ ) {
    result += '0';
  }

  result += num;
  return Number(result);
}
export default function task5 ( obj ) {

  if ( !obj.min || !obj.max ) {
    return {
      status: 'failed',
      reason: `You need to pass to the function  object with "min" and "max" fields`
    }
  }

  if ( obj.min > obj.max ) {
    return {
      status: 'failed',
      reason: `"min" shouldn't be greater than "max"`
    }
  }

  if ( obj.min.toString().length !== 6 || obj.max.toString().length !== 6 ) {
    return {
      status: 'failed',
      reason: `"min" and "max" fields should have six-digit number`
    }
  }

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
    const even = arrNum.reduce( (acc, cur) => {
      if (cur % 2 === 0) {
        return acc + Number(cur)
      }
      return acc;
    }, 0);
    const odd = arrNum.reduce( (acc, cur) => {
      if (cur % 2 !== 0) {
        return acc + Number(cur)
      }
      return acc;
    }, 0);

    if ( even === odd ) {
      winSecond++;
    }
  }

  if ( winFirst > winSecond ) {
    return {
      info: `Simple method wins: the sum of the first three digits = the sum of the last three digits.`,
      simpleMethod: `${winFirst} winning tickets`,
      complicatedMethod: `${winSecond} winning tickets`,
    }
  } else if (winFirst === winSecond) {
    return {
      info: `Simple and Complicated methods have the same number of winning tickets.`,
      simpleMethod: `${winFirst} winning tickets`,
      complicatedMethod: `${winSecond} winning tickets`,
    }
  } else {
    return {
      info: `Complicated method wins: the sum of the even digits = the sum of the odd digits.`,
      simpleMethod: `${winFirst} winning tickets`,
      complicatedMethod: `${winSecond} winning tickets`,
    }
  }
}
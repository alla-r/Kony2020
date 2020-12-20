/* Numerical sequence */

export default function task6 (n, m) {
  if ( !n || !m ) {
    return {
      status: 'failed',
      reason: `You need to enter length of numerical sequence and value of minimum square`
    }
  }

  if (n === 0) {
    return '';
  }

  if (n < 0) {
    return {
      status: 'failed',
      reason: `The length of numerical sequence can't be less than zero.`
    }
  }

  if (m <= 0) {
    return {
      status: 'failed',
      reason: `The value of minimum square can't be equal or less than zero.`
    }
  }

  if ( isNaN(n) || isNaN(m) ) {
    return {
      status: 'failed',
      reason: `The input values should be numbers`
    }
  } 

  const firstNum = Math.ceil(Math.sqrt(m));
  const arrResult = [];
  
  for ( let i = 0; i < n; i++ ) {
    arrResult.push(firstNum + i);
  }

  return arrResult.join(', ');
}
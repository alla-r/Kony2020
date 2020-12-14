/* Numerical sequence */

export default function task6 (n, m) {
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
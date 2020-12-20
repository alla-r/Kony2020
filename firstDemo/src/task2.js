/* Function will return the number of envelope that could be nested or 0 if it's impossible */ 

export default function task2 ( env1, env2 ) {
  if ( !+env1.a || !+env1.b || !+env2.c || !+env2.d ) {
    return {
      status: 'failed',
      reason: `You need to enter height and width for two envelopes. It should be numbers.`
    }
  }

  if ( env1.a <= 0 || env1.b <= 0 || env2.c <= 0 || env2.d <= 0 ) {
    return {
      status: 'failed',
      reason: `The length of envelopes height and width couldn't be equal or less than zero`
    }
  }

  return compareSides(env1.a, env1.b, env2.c, env2.d); 
}

function compareSides (a, b, c, d) {
  switch (true) {
    case a < c && b < d:
    case a < d && b < c:
      return 1;
    case c < a && d < b:
    case c < b && d < a:
      return 2;
    default:
      return 0;
  }
}
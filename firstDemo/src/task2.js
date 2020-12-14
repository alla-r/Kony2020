/* Function will return the number of envelope that could be nested or 0 if it's impossible */ 

export default function task2 ( env1, env2 ) {
  if ( !env1.a || !env1.b || !env2.c || !env2.d ) {
    return {
      status: 'failed',
      reason: `You need to pass to the function first object with "a" and "b" keys and second object with "c" and "d" keys`
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
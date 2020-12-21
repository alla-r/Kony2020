/* Fibonacci for a range */ 

export default function task7 ( obj ) {
  if (obj.length <= 0) {
    return {
      status: 'failed',
      reason: `The length can't be equal or less than zero.`
    }
  }
 
  if ( (isNaN(obj.min) || isNaN(obj.max)) && isNaN(obj.length) ) {
    return {
      status: 'failed',
      reason: `"min" and "max" or "length" fields should be a number`
    }
  }

  if (obj.min > obj.max) {
    return {
      status: 'failed',
      reason: `"min" number shouldn't be greater than "max"`
    }
  }

  // Min max
  let prev = 0;
  let curr = 1;
  const resultMinMax = [];
  while ( prev <= obj.max ) {

    if ( prev >= obj.min ) {
      resultMinMax.push(prev);
    }

    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  // Length
  prev = 0;
  curr = 1;
  const resultLength = [];
  while ( prev.toString().length <= obj.length ) {

    if ( prev.toString().length >= obj.length ) {
      resultLength.push(prev);
    }

    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return resultMinMax.length !== 0 ? resultMinMax : resultLength;
}
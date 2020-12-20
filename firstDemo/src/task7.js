/* Fibonacci for a range */ 

export default function task7 ( obj ) {
  if (obj.length <= 0 && obj.length) {
    return {
      status: 'failed',
      reason: `The length can't be equal or less than zero.`
    }
  }

  if ( (obj.min !== 0 && !obj.min || !obj.max) && !obj.length ) {
    return {
      status: 'failed',
      reason: `The input object should have "min" and "max" fields or "length" field`
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

  let prev = 0;
  let curr = 1;
  const resultMinMax = [];
  // Min max
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
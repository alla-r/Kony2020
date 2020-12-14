/* Fibonacci for a range */ 

export default function task7 ( obj ) {
  if ( (!obj.min || !obj.max) && !obj.length ) {
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

  // Length new
  prev = 0;
  curr = 1;
  const resultLengthNew = [];
  while ( resultLengthNew.length < obj.length ) {
    resultLengthNew.push(prev);

    let temp = curr;
    curr = prev + curr;
    prev = temp;

  }

  return resultMinMax.length !== 0 ? resultMinMax : resultLengthNew;
}
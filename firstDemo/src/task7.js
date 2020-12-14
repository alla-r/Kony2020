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

  

  return 3;
}
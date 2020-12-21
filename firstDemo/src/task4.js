// Palindrome

export default function task4 (num) {
  if (isNaN(num)) {
    return {
      status: 'failed',
      reason: `The input value should be a number`
    }
  }

  if (num < 10 && num >= 0) {
    return {
      status: 'failed',
      reason: `Numbers that are equal or greater than 0 and less than 10 are not considered as palindrome`
    }
  }

  const arr = String(num).split('');
  let indexStart = 0;
  let indexEnd = 0;
  let palindrome = 0;
  let tempPal = 0;
  
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = arr.length - 1; j > i; j-- ) {
     
      if ( arr[i] == arr[j]) {
        
        indexStart = i;
        indexEnd = j;

        let n = j - 1;
        for ( let m = i + 1; n >= m; m++  ) {
          if ( arr[m] !== arr[n] ) {
            indexStart = 0;
            indexEnd = 0;
            break;
          }
          n--;
        }

        if (indexEnd) {
          tempPal = Number(arr.slice(indexStart, indexEnd + 1).join(''));
        }
      }

      if (tempPal.toString().length > palindrome.toString().length) {
        palindrome = tempPal;
      }
    }
  }

  return palindrome;
}
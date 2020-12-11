// Palindrome

export default function task4 (num) {
  if (isNaN(+num)) {
    return {
      status: 'failed',
      reason: `The input value should be a number`
    }
  }

  if (num < 10) {
    return {
      status: 'failed',
      reason: `Numbers that are less than 10 are not considered as palindrome`
    }
  }

  const arr = String(num).split('');
  let indexStart = 0;
  let indexEnd = 0;
  let palindrome = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j-- ) {
      if (arr[i] === arr[j]) {
        indexStart = i;
        indexEnd = j;

        if (j - i === 1 || j - i === 2) {
          if (arr.slice(indexStart, indexEnd + 1).join('').length > palindrome.toString().length) {
            palindrome = Number(arr.slice(indexStart, indexEnd + 1).join(''));
          }
        } else {
          for (i += 1; j - i === 1 || j - i === 2; i++) {
            if (arr[i] !== arr[j - 1]) {
              indexStart = 0;
              indexEnd = 0;
              break;
            }
          }
          if (indexEnd !== 0) {
            if (arr.slice(indexStart, indexEnd + 1).join('').length > palindrome.toString().length) {
              palindrome = Number(arr.slice(indexStart, indexEnd + 1).join(''));
            }
          }
        }
      }
    }
  }

  return palindrome;
}
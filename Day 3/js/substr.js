/* The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters. */


// Any argument value that is less than 0 or greater than stringName.length is treated as if it were 0 and stringName.length, respectively.

// Any argument value that is NaN is treated as if it were 0.

export default function substr(str, start = 0, count = str.length - start) {
  isNaN(count) ? count = 0 : +count;
  isNaN(start) ? start = 0 : +start;

  if (start < 0) {
    start = str.length + start;
  }

  if (count < 0) {
    count = 0;
  }

  let newStr = '';

  for ( let i = start; i < start + count && i < str.length; i++ ) {
    console.log();
    newStr += str[i];
  }

  return newStr;
}
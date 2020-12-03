/* The repeat() method constructs and returns a new string which contains the specified number of copies (second argument) of the string (first argument), concatenated together. */

export default function repeat(str, count) {
  let newStr = '';

  if (isNaN(count)) {
    throw new RangeError('Repeat count must be a number');
  }

  count = +count;

  if (count === Infinity) {
    throw new RangeError('Repeat count must be less than infinity');
  }

  if (count < 0) {
    throw new RangeError('Repeat count must be positive');
  }

  for (let i = 0; i < count; i++) {
    newStr += str;
  }

  return newStr;
}
/* The lastIndexOf() method returns the index within the string (first argument) of the last occurrence of the specified value (second argument. Returns -1 if the value is not found. */


export default function lastIndexOf(sentence, search, fromIndex = sentence.length) {
  let lastIndex = 0;
  let counter = 0;

  if (search.length > sentence.length) {
    return -1;
  }

  if (search === '') {
    return fromIndex;
  }

  if (fromIndex >= sentence.length) {
    fromIndex = sentence.length;
  }

  if (fromIndex < 0) {
    fromIndex = 0;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (counter === search.length) {
      return lastIndex;
    }

    if (sentence[i] === search[0]) {
      lastIndex = i;
      counter++;

      for (let j = 1; j < search.length; j++) {
        if (sentence[i+j] === search[j]) {
          counter++;
        } else {
          lastIndex = 0;
          counter = 0;
          break;
        }
      }
    }
  }

  if (counter !== search.length) {
    return -1;
  }
}
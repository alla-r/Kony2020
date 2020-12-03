/* The includes() method determines whether one string (second argument) may be found within another string (first argument) from the start index (3d arguments), returning true or false as appropriate. */

export default function includes(sentence, search, start = 0) {
  let counter = 0;

  if (search.length + start > sentence.length) {
    return false;
  }

  for (let i = start; i < sentence.length; i++ ) {
    if (counter === search.length) {
      return true;
    }

    if (sentence[i] === search[0]) {
      counter++;
      for (let j = 1; j < search.length; j++) {
        if (sentence[i+j] === search[j]) {
          counter++;
        } else {
          counter = 0;
          break;
        }
      }
    }
  }

  return counter === search.length;
}
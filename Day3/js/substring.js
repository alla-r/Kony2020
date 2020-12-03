/* The substring() method returns the part of the string between the start and end indexes, or to the end of the string. */ 

export default function substring(str, start = 0, end = str.length) {
  isNaN(end) ? end = 0 : +end;
  isNaN(start) ? start = 0 : +start;

  if (start === end) {
    return '';
  }

  if (start > end) {
    let tempStart = start;
    start = end;
    end = tempStart;
  }

  if (start < 0) {
    start = 0;
  }
  if (end > str.length) {
    end = str.length;
  }

  let newStr = '';

  for (let i = start; i < end; i++) {
    newStr += str[i];
  }
  return newStr;
}
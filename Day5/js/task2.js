export default function findChair(arr, require) {
  if (require === 0) {
    return 'Game on';
  }

  if (require > 8) {
    return `Your meeting room can take up to 8 chairs.`;
  }

  let amountNeededChairs = require;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].length < arr[i][1]) {
      let freeChairs = arr[i][1] - arr[i][0].length;
      if (freeChairs >= amountNeededChairs) {
        result.push(amountNeededChairs);
        return result;
      } else {
        result.push(freeChairs);
        amountNeededChairs -= freeChairs;
      }
    } else {
      result.push(0);
    }
  }

  return 'Not enough!';
}
/* The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. */

export default function shift(arr) {
  if (arr.length === 0) {
    return void 0;
  }

  const deletedValue = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;
  return deletedValue;
}
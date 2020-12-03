/* The pop() method removes the last element from an array and returns that element. This method changes the length of the array. */

export default function pop(arr) {
  const deletedValue = arr[arr.length - 1];
  arr.length--;

  return deletedValue;
}
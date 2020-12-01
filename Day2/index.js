// Task 1
function getNumberOfBits (num) {
  const arr = num.toString(2).split('');
  let counter = 0;
  arr.forEach(el => {
    if (Number(el) === 1) {
      counter++;
    }
  });
  return counter;
}
// console.log(getNumberOfBits(1234));

// Task 2
function sortString(str) {
  if (str === '') {
    return '';
  }

  const arr = str.split(' ');

  arr.sort( (word1, word2) => word1.match(/\d/)[0] - word2.match(/\d/)[0]);

  return arr;
}
// console.log(sortString("is2 Thi1s T4est 3a"));
// console.log(sortString('4of Fo1r pe6ople g3ood th5e the2'));
// console.log(sortString(''));

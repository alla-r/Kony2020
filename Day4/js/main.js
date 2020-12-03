import concat from './concat.js';
import pop from './pop.js';
import push from './push.js';
import shift from './shift.js';
import unshift from './unshift.js';

const defaultArr = ['Яблоко', 'Банан', 'Ананас'];

// map => reduce
const reduceMap = defaultArr.reduce( (acc, cur) => {
  acc.push(cur[0]);
  return acc;
}, []);
// console.log(reduceMap);

// filter => reduce
const reduceFilter = defaultArr.reduce( (acc, cur) => {
  if (cur[0].toLowerCase() == 'а') {
    acc.push(cur);
    return acc;
  }
  return acc;
}, []);
// console.log(reduceFilter);

// forEach => reduce
const reduceForEach = defaultArr.reduce( (acc, cur, i) => {
  acc.push(`${i + 1}: ${cur}`);
  return acc;
}, []);
// console.log(reduceForEach);



// const newArr1 = ['Яблоко', 'Банан', 'Ананас'].map( el => el[0]);
// // ["Я", "Б", "А"]

// const newArr2 = ['Яблоко', 'Банан', 'Ананас'].filter( el => el[0].toLowerCase() == 'а');
// // ["Ананас"]

// const arr23 = ['Яблоко', 'Банан', 'Ананас'];
// arr23.forEach( (el, i, arr) => {
//   arr[i] = `${i + 1}: ${el}`
// });
// // ["1: Яблоко", "2: Банан", "3: Ананас"]
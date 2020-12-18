import task1 from './src/task1.js';
import task2 from './src/task2.js';
import task3 from './src/task3.js';
import task4 from './src/task4.js';
import task5 from './src/task5.js';
import task6 from './src/task6.js';
import task7 from './src/task7.js';

// Chess board
const taskBtnList = [...document.querySelectorAll('.btn-task')];
console.log(taskBtnList);

taskBtnList.forEach( btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const numTask = e.target.id.match(/\d/);
    console.log(numTask);
    const inputList = e.target.parentNode.querySelectorAll(`#task${numTask[0]} input`);
    const result = chooseFunc(+numTask[0], inputList[0].value, inputList[1].value, inputList[2].value, inputList[3].value);
    console.log(task1(inputList[0].value, inputList[1].value, inputList[2].value));

    console.log(result);
  });
});

function chooseFunc(id, ...args) {
  switch(id) {
    case 1:
      return task1(args[0], args[1], args[2]);
    case 2:
      return task2({a: args[0], b: args[1]}, {c: args[2], d: args[3]});
  }
}


// console.log(task1());
// console.log(task1(3, 8, '*'));
// console.log(task1('4', 6, 'alla'));
// console.log(task1(3, 'sre', '*'));
// console.log(task1(3, 8, '#'));

// Envelope
// console.log(task2({ a: 3, b: 5 }, { c: 2, d: 6 }));
// console.log(task2({ a: 3, b: 5 }, { c: 2, d: 1 }));
// console.log(task2({ a: 3 }, { c: 2, d: 6 }));

// Sort triangles
// console.log(task3([
//   {
//     vertices: 'ABC',
//     a: 10,
//     b: 20,
//     c: 22.36
//   },
//   {
//     vertices: 'DBC',
//     d: 11,
//     b: 20,
//     c: 22.36
//   },
//   {
//     vertices: 'AYC',
//     a: 9,
//     y: 20,
//     c: 22.36
//   }
// ]));

// Palindrome
// console.log(task4(5));
// console.log(task4('str'));
// console.log(task4(1234437));
// console.log(task4(3685751111));
// console.log(task4(123443566589));

// Winning tickets
// console.log(task5({ min: 643313, max: 643319 }));

// Numerical sequence
// console.log(task6(3, 12));

// Fibonacci for a range
// console.log(task7({ min: 3, max: 123 }));
// console.log(task7({ length: 8 }));
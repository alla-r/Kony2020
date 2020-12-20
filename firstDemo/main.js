import task1 from './src/task1.js';
import task2 from './src/task2.js';
import task3 from './src/task3.js';
import task4 from './src/task4.js';
import task5 from './src/task5.js';
import task6 from './src/task6.js';
import task7 from './src/task7.js';

// Chess board
const btn1 = document.getElementById('btn-task1');
const btn2 = document.getElementById('btn-task2');
const btn3 = document.getElementById('btn-task3');
const btn3Add = document.getElementById('btn-task3-add');
const btn4 = document.getElementById('btn-task4');
const btn5 = document.getElementById('btn-task5');
const btn6 = document.getElementById('btn-task6');
const btn7 = document.getElementById('btn-task7');

function setInnerError(id, text) {
  const err = document.querySelector(`#task${id} .error`);
  err.innerHTML = text;
}

function setOutput(id, result) {
  let classVal;
  result ? classVal = `card card-body bg-task${id} text-white` : `card card-body d-none`;

  const output =  document.querySelector(`#output-task${id}`);
  output.classList = classVal;
  result ? output.innerHTML = result : output.innerHTML = '';
}

// TASK 1
btn1.addEventListener('click', e => {
  e.preventDefault();

  const height = document.querySelector('#height-chess').value.trim();
  const width = document.querySelector('#width-chess').value.trim();
  const symbol = document.querySelector('#symbol-chess').value.trim();
  const result = task1(height, width, symbol);

  if (result.reason) {
    setInnerError(1, result.reason);
    setOutput(1, false);
  } else {
    setInnerError(1, '');
    setOutput(1, `<pre>${result}</pre>`);
  }
});

// TASK 2
btn2.addEventListener('click', e => {
  e.preventDefault();

  const height1 = document.querySelector('#height-envelope-1').value.trim();
  const height2 = document.querySelector('#height-envelope-2').value.trim();
  const width1 = document.querySelector('#width-envelope-1').value.trim();
  const width2 = document.querySelector('#width-envelope-2').value.trim();
  
  const result = task2({a: height1, b: width1}, {c: height2, d: width2});
  let outputText;

  result === 0 ? outputText = `Envelopes cannot be nested` : outputText = `You can put envelope №${result} inside another`

  if (result.reason) {
    setInnerError(2, result.reason);
    setOutput(2, false);
  } else {
    setInnerError(2, '');
    setOutput(2, outputText);
  }
});

// TASK 3
const arrTriangles = [];

btn3Add.addEventListener('click', e => {
  e.preventDefault();

  setOutput(3, false);

  const vertices = document.querySelector('#vertices').value.trim();
  const side1 = document.querySelector('#side-1').value.trim();
  const side2 = document.querySelector('#side-2').value.trim();
  const side3 = document.querySelector('#side-3').value.trim();
  if ( !vertices || !side1 || !side2 || !side3 ) {
    setInnerError(3, `You should fill all fields before add another triangle`);
  } else if ( vertices.length !== 3 ) {
    console.log('err');
    setInnerError(3, `Name of triangles vertices should have 3 letters`);
  } else if ( !+side1 || !+side2 || !+side3 ) {
    setInnerError(3, `Length of triangle's sides should be a number`);
  } else {
    setInnerError(3, '');
    arrTriangles.push({
      vertices: vertices.toUpperCase(),
      [vertices[0]]: side1,
      [vertices[1]]: side2,
      [vertices[2]]: side3
    });
    document.querySelector('#vertices').value = '';
    document.querySelector('#side-1').value = '';
    document.querySelector('#side-2').value = '';
    document.querySelector('#side-3').value = '';
  }
});

btn3.addEventListener('click', e => {
  e.preventDefault();

  console.log(e.target);

  let result = task3(arrTriangles);

  if (result.reason) {
    setInnerError(3, result.reason);
    setOutput(3, false);
  } else {
    setInnerError(3, '');
    setOutput(3, `[ ${result} ]`);
  }
});

// TASK 4


// const taskBtnList = [...document.querySelectorAll('.btn-task')];
// console.log(taskBtnList);

// taskBtnList.forEach( btn => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const numTask = e.target.id.match(/\d/);
//     console.log(numTask);
//     const inputList = e.target.parentNode.querySelectorAll(`#task${numTask[0]} input`);
//     const result = chooseFunc(+numTask[0], inputList[0].value, inputList[1].value, inputList[2].value, inputList[3].value);
//     console.log(task1(inputList[0].value, inputList[1].value, inputList[2].value));

//     console.log(result);
//   });
// });

// function chooseFunc(id, ...args) {
//   switch(id) {
//     case 1:
//       return task1(args[0], args[1], args[2]);
//     case 2:
//       return task2({a: args[0], b: args[1]}, {c: args[2], d: args[3]});
//   }
// }


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
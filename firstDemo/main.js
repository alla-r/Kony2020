import task1 from './src/task1.js';
import task2 from './src/task2.js';
import task3 from './src/task3.js';
import task4 from './src/task4.js';
import task5 from './src/task5.js';
import task6 from './src/task6.js';
import task7 from './src/task7.js';

const dom = {
  btn1 : document.getElementById('btn-task1'),
  btn2 : document.getElementById('btn-task2'),
  btn3 : document.getElementById('btn-task3'),
  btn3Add : document.getElementById('btn-task3-add'),
  btn4 : document.getElementById('btn-task4'),
  btn5 : document.getElementById('btn-task5'),
  btn6 : document.getElementById('btn-task6'),
  btn7min : document.getElementById('btn-task7-min'),
  btn7len : document.getElementById('btn-task7-len')
}

function setInnerError(id, text) {
  const err = document.querySelector(`#task${id} .error`);
  err.innerHTML = text;
}

function setOutput(id, result) {
  let classVal;
  result ? classVal = `card card-body bg-task${id} text-white` : classVal = `card card-body d-none`;

  const output =  document.querySelector(`#output-task${id}`);
  output.classList = classVal;
  result ? output.innerHTML = result : output.innerHTML = '';
}

function emptyField( id ) {
  setInnerError(id, `You need to fill all fields before submit`);
  setOutput(id, false);
}

// TASK 1
dom.btn1.addEventListener('click', e => {
  e.preventDefault();

  const height = document.querySelector('#height-chess').value.trim();
  const width = document.querySelector('#width-chess').value.trim();
  const symbol = document.querySelector('#symbol-chess').value.trim();

  if ( height === '' || width === '' || symbol === '' ) {
    emptyField(1);
  } else {
    const result = task1(+height, +width, symbol);

    if (result.reason) {
      setInnerError(1, result.reason);
      setOutput(1, false);
    } else {
      setInnerError(1, '');
      setOutput(1, `<pre>${result}</pre>`);
    }
  }
});

// TASK 2
dom.btn2.addEventListener('click', e => {
  e.preventDefault();

  const height1 = document.querySelector('#height-envelope-1').value.trim();
  const height2 = document.querySelector('#height-envelope-2').value.trim();
  const width1 = document.querySelector('#width-envelope-1').value.trim();
  const width2 = document.querySelector('#width-envelope-2').value.trim();
  
  if ( height1 === '' || width1 === '' || height2 === '' || width2 === '' ) {
    emptyField(2);
  } else {
    const result = task2({a: +height1, b: +width1}, {c: +height2, d: +width2});
    let outputText;

    result === 0 ? outputText = `Envelopes cannot be nested` : outputText = `You can put envelope №${result} inside another`

    if (result.reason) {
      setInnerError(2, result.reason);
      setOutput(2, false);
    } else {
      setInnerError(2, '');
      setOutput(2, outputText);
    }
  }
});

// TASK 3
const arrTriangles = [];

dom.btn3Add.addEventListener('click', e => {
  e.preventDefault();

  setOutput(3, false);

  const vertices = document.querySelector('#vertices').value.trim();
  const side1 = document.querySelector('#side-1').value.trim();
  const side2 = document.querySelector('#side-2').value.trim();
  const side3 = document.querySelector('#side-3').value.trim();

  if ( !vertices || !side1 || !side2 || !side3 ) {
    setInnerError(3, `You should fill all fields before add another triangle`);
  } else if ( vertices.length !== 3 ) {
    setInnerError(3, `Name of triangles vertices should have 3 letters`);
  } else if ( !+side1 || !+side2 || !+side3 ) {
    setInnerError(3, `Length of triangle's sides should be a number`);
  } else {
    setInnerError(3, '');
    arrTriangles.push({
      vertices: vertices.toUpperCase(),
      [vertices[0].toLowerCase()]: side1,
      [vertices[1].toLowerCase()]: side2,
      [vertices[2].toLowerCase()]: side3
    });
    document.querySelector('#vertices').value = '';
    document.querySelector('#side-1').value = '';
    document.querySelector('#side-2').value = '';
    document.querySelector('#side-3').value = '';
  }
});

dom.btn3.addEventListener('click', e => {
  e.preventDefault();

  if (arrTriangles.length === 0) {
    setInnerError(3, `You need to add triangles before sorting`);
    setOutput(3, false);
  } else {
    let result = task3(arrTriangles);

    if (result.reason) {
      setInnerError(3, result.reason);
      setOutput(3, false);
    } else {
      setInnerError(3, '');
      setOutput(3, `[ ${result} ]`);
      arrTriangles.length = 0;
    }
  }
});

// TASK 4
dom.btn4.addEventListener('click', e => {
  e.preventDefault();

  const num = document.querySelector('#palindrome').value.trim();
  
  if ( num === '' ) {
    emptyField(4);
  } else {
    const result = task4(+num);
    let outputText;

    result === 0 ? outputText = `This number doesn't have palindrome` : outputText = `The longest palindrome is ${result}`

    if (result.reason) {
      setInnerError(4, result.reason);
      setOutput(4, false);
    } else {
      setInnerError(4, '');
      setOutput(4, outputText);
    }
  }
});

// TASK 5
dom.btn5.addEventListener('click', e => {
  e.preventDefault();

  const min = document.querySelector('#min-ticket').value.trim();
  const max = document.querySelector('#max-ticket').value.trim();

  if ( min === '' || max === '' ) {
    emptyField(5);
  } else {
    const result = task5({min: +min, max: +max});

    if (result.reason) {
      setInnerError(5, result.reason);
      setOutput(5, false);
    } else if (result.winner) {
      setInnerError(5, '');
      setOutput(5, `${result.winner} wins. <br> Amount of winning tickets using simple method is ${result.simpleMethod}, complicated - ${result.complicatedMethod}.`);
    } else {
      setInnerError(5, '');
      setOutput(5, `${result.info} <br> Amount of winning tickets using simple method is ${result.simpleMethod}, complicated - ${result.complicatedMethod}.`);
    }
  }
});

// TASK 6
dom.btn6.addEventListener('click', e => {
  e.preventDefault();

  const len = document.querySelector('#len-sequence').value.trim();
  const minSquare = document.querySelector('#min-square').value.trim();
  
  if ( len === '' || minSquare === '' ) {
    emptyField(6);
  } else {
    const result = task6(len, minSquare);

    if (result.reason) {
      setInnerError(6, result.reason);
      setOutput(6, false);
    } else {
      setInnerError(6, '');
      setOutput(6, `<p>${result}</p>`);
    } 
  }
});

// TASK 7

dom.btn7min.addEventListener('click', e => {
  e.preventDefault();

  const min = document.querySelector('#fib-min').value.trim();
  const max = document.querySelector('#fib-max').value.trim();

  if ( min === '' || max === '' ) {
    emptyField(7);
  } else {
    let result = task7({min: +min, max: +max});

    if (result.reason) {
      setInnerError(7, result.reason);
      setOutput(7, false);
    } else {
      setInnerError(7, '');
      setOutput(7, `[ ${result} ]`);
    }
  }  
});

dom.btn7len.addEventListener('click', e => {
  e.preventDefault();

  const length = document.querySelector('#fib-len').value.trim();

  if ( length === '' ) {
    emptyField(7);
  } else {
    let result = task7({length: +length});

    if (result.reason) {
      setInnerError(7, result.reason);
      setOutput(7, false);
    } else {
      setInnerError(7, '');
      setOutput(7, `[ ${result} ]`);
    }
  }  
});
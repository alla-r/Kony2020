import damagedOrSunk from './task3.js';
import hiddenMes from './task1.js'

const board = [ 
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0] 
];
          
const attacks = [[3, 1], [3, 2], [3, 3]];

console.log(damagedOrSunk(board, attacks));

const board2 =  [ 
  [3, 0, 1],
  [3, 0, 1],
  [0, 2, 1], 
  [0, 2, 0] 
];

const attacks2 = [[2, 1], [2, 2], [ 3, 2], [3, 3]];
console.log(damagedOrSunk(board2, attacks2));

// console.log(hiddenMes('Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her! Anyhow, it hasn\'t been a pleasurable experience to go through it? I wanted to feel done with it first.     '));

// console.log(hiddenMes('Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her! Anyhow, it hasn\'t been a pleasurable experience to go through it? I wanted to feel done with it first. Yesterday, we bumped into Laura. It had to happen, but you can\'t deny theT timing couldn\'t be worse. The "missionT" to try and seduce her was a complete failure last month. By the way, she still hasT the I gave her! Anyhow, it hasn\'t beenT a pleasurable experience to go through it? I wanted to feel doneT with it. '));

// console.log(hiddenMes('     '));
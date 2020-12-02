// Task 1
function getNumberOfBits (num) {
  const arr = num.toString(2).split('');
  
  return arr.reduce( (el1, el2) => Number(el1) + Number(el2) , 0);
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



// TASK 3
function menStillStanding(arr) {
  const teamA = new Array(11).fill(0);
  const teamB = new Array(11).fill(0);

  if ( arr.length === 0 ) {
    return [11,11];
  }

  for (let i = 0; i < arr.length; i++) {
    // check if game is over
    if (teamA.filter(el => el !== 'deleted').length < 7 || teamB.filter(el => el !== 'deleted').length < 7) {
      return [teamA.filter(el => el !== 'deleted').length, teamB.filter(el => el !== 'deleted').length];
    }

    const [team, num, color] = [arr[i][0], arr[i].slice(1,-1), arr[i].slice(-1)];

    if (team === 'A') {
      // Ignore repeated card
      if ( teamA[num - 1] === 'deleted' ) {
        break;
      }

      // give a point
      if (color === 'Y') {
        teamA[num - 1] += 1;
      } else {
        teamA[num - 1] += 2;
      }

      // check if deleted
      if (teamA[num - 1] >= 2) {
        teamA[num - 1] = 'deleted';
      }

    } else {
      // Ignore repeated card
      if ( teamB[num - 1] === 'deleted' ) {
        console.log('Player has been already deleted');
        break;
      }

      // give a point
      if (color === 'Y') {
        teamB[num - 1] += 1;
      } else {
        teamB[num - 1] += 2;
      }

      // check if deleted
      if (teamB[num - 1] >= 2) {
        teamB[num - 1] = 'deleted';
      }
    }
  }

  return [teamA.filter(el => el !== 'deleted').length, teamB.filter(el => el !== 'deleted').length];
}
// console.log(menStillStanding([]));
// console.log(menStillStanding(['A4Y', 'A4Y']));
// console.log(menStillStanding(['A4Y', 'A4R']));
// console.log(menStillStanding(['A4Y', 'A5R', 'B5R', 'A4Y', 'B6Y']));
// console.log(menStillStanding(['A4R', 'A4R', 'A4R']));
// console.log(menStillStanding(['A4R', 'A6R', 'A8R', 'A10R', 'A11R']));
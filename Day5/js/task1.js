/* "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" */

export default function meeting(list) {
  list = list.toUpperCase();
  const arrList = list.split(';');
  const arrName = [];
  let result = '';

  arrList.forEach((el, i) => {
    arrName[i] = el.split(':');
  });

  arrName.sort( (elF, elS) => {
    if (elF[1] === elS[1]) {
      return compare(elF[0], elS[0]);
    }

    return compare(elF[1], elS[1]);
  });

  for (let i = 0; i < arrName.length; i++) {
    result += `(${arrName[i][1]}, ${arrName[i][0]})`;
  }

  return result;
}


function compare(a, b) {
  switch(true) {
    case a > b:
      return 1;
    case a < b:
      return -1;
    case a === b:
      return 0;
  }
}
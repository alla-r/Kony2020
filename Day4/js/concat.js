// method is used to merge two or more arrays.

export default function concat(...args) {
  const newArr = [];
  for (let i = 0; i < args.length; i++) {

    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        newArr[newArr.length] = args[i][j];
      }
    } else {
      newArr[newArr.length] = args[i];
    }

  }

  return newArr;
}
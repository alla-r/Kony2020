// concatenates all arguments and returns a new string.

// export default function concat(...arg) {
//   let newStr = '';
//   for (let i = 0; i < arg.length; i++) {
//     newStr += String(arg[i]);
//   }

//   return newStr;
// }

export default function concat() {
  let newStr = '';
  for (let i = 0; i < arguments.length; i++) {
    newStr += String(arguments[i]);
  }

  return newStr;
}
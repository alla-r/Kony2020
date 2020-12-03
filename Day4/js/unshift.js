/* The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. */ 

export default function unshift(...args) {
  for (let i = 0; i < args.length - 1; i++) {
    args[0][args[0].length] = args[0][i];
    args[0][i] = args[i + 1];
  }

  return args[0].length;
}
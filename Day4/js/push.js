/*  method adds one or more elements to the end of an array and returns the new length of the array */

export default function push(...args) {

  for (let i = 1; i < args.length; i++) {
    args[0][args[0].length] = args[i];
  }
  
  return args[0].length;
}
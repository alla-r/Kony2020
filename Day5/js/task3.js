export default function getSmallestDistance(arr) {
  if (arr.length < 2) {
    return `You need to give at least 2 points to find two points with the smallest distance between them`;
  }
  if (arr.length === 2) {
    return arr;
  }

  const result = [];
  result.push(arr[0], arr[1]);
  let minDistance = Number(Math.sqrt(Math.abs(arr[1][0] - arr[0][0]) ** 2 + Math.abs(arr[1][1] - arr[0][1]) ** 2).toFixed(2));

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
    
      const distance = Number(Math.sqrt(Math.abs(arr[j][0] - arr[i][0]) ** 2 + Math.abs(arr[j][1] - arr[i][1]) ** 2).toFixed(2));

      if (distance < minDistance) {
        result.length = 0;
        minDistance = distance;
        result.push(arr[i], arr[j]);
      }
    }
  }

  return result;
}
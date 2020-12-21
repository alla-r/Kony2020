/* Sort triangles   CHECK  */ 

export default function task3 (arr) {

  if ( arr.length < 2 ) {
    return arr[0].vertices;
  }

  arr.forEach( obj => {
    const a = obj[obj.vertices[0].toLowerCase()];
    const b = obj[obj.vertices[1].toLowerCase()];
    const c = obj[obj.vertices[2].toLowerCase()];

    const p = ( a + b + c ) / 2;
    obj.square = +Math.sqrt( p * (p - a) * (p - b) * (p - c) ).toFixed(2);
  });

  arr.sort( (obj1, obj2) => {
    return obj1.square - obj2.square;
  });

  return arr.map(el => el.vertices);
}
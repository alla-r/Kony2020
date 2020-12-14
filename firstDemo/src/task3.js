/* Sort triangles   CHECK  */ 

export default function task3 (arr) {

  if ( arr.length < 2 ) {
    return arr;
  }

  let validation = true;

  arr.forEach( obj => {
    const arrVert = obj.vertices.split('');
  
    arrVert.forEach( vertice => {
      if ( !getSideLength(vertice, obj) ) {
        validation = false;
      } 
    });

  });

  if ( !validation ) {
    return {
      status: 'failed',
      reason: `You need to pass to the function array of objects. Every object should have info about triangle: vertices and the sides' length`
    }
  }

  arr.forEach( obj => {
    const a = getSideLength( obj.vertices[0], obj );
    const b = getSideLength( obj.vertices[1], obj );
    const c = getSideLength( obj.vertices[2], obj );
    // console.log(a, b, c);

    const p = ( a + b + c ) / 2;
    obj.square = +Math.sqrt( p * (p - a) * (p - b) * (p - c) ).toFixed(2);
  });

  arr.sort( (obj1, obj2) => {
    return obj1.square - obj2.square;
  });

  return arr.map(el => el.vertices);
}

function getSideLength (vertice, obj) {
  return obj[`${vertice.toUpperCase()}`] || obj[`${vertice.toLowerCase()}`];
}
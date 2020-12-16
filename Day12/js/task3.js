
export default function star (i) {
  setInterval(() => {
  
    let currTitle = document.title;
    const symbol = [ '✴', '✳', '✶', '✷', '✸', '✹', '✺' ];
    

    if ( i === 6 ) {
      i = 0;
    } 
    i++
 
    document.title = symbol[i];
    
  }, 100);
}
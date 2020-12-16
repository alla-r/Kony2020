
export default function simpleDots () {
  setInterval(() => {
  
    let currTitle = document.title;
    
    if ( currTitle.length === 3 ) {
      console.log('OK');
      currTitle = '';
    } 
    
    document.title = currTitle + '.';

  }, 200);
}
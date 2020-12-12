/* Function for decoding the message */

export default function hiddenMessage(sentences) {

  if (sentences === '' || sentences.trim() === '') {
    return '';
  }

  const arrSentences = sentences.match(/([^.!?]+?)([.!?])/gm);
  let result = '';  
  let arrIndexes = getIndexes(arrSentences[0]);

  if (arrIndexes.length >= arrSentences.length - 1) {
    result = getMessage(arrIndexes, arrSentences);
  } else {
    while (arrSentences.length !== 0) {
      arrIndexes = getIndexes(arrSentences[0]);
      result += getMessage(arrIndexes, arrSentences.splice(0, arrIndexes.length + 1));
    } 
  }

  return result.trim();
}

function getIndexes(controlSentence) {
  const arrSentence = controlSentence.match(/[\w\'\']+/g);
  return arrSentence.map( el => {
    const counter = el.match(/\'/g);
    let length;
    counter ? length = el.length - 1 - counter.length : length = el.length - 1;
    return length;
  });
}

function getMessage( arrIndexes, arrSentences ) {
  let result = '';
  for (let i = 1; i <= arrIndexes.length; i++) {
    if ( i === 1 ) {
      const firstWord = getWord(arrSentences[i], arrIndexes[i - 1]);
      result = `${firstWord[0].toUpperCase()}${firstWord.slice(1)}`;
    } else if (i === arrSentences.length - 1) {
      result += ` ${getWord(arrSentences[i], arrIndexes[i - 1])}. `;  
    } else {
      result += ` ${getWord(arrSentences[i], arrIndexes[i - 1])}`;
    }
  }
  return result;
}

function getWord(sentence, index) {
  return sentence.match(/[\w\'\']+/g)[index].toLowerCase();
}
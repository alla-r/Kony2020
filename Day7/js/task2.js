/*  */

export default function hiddenMessage(sentences) {
  const arrSentences = sentences.match(/([^.!?]+?)([.!?])/gm);
  const firstSentence = arrSentences[0].match(/[\w\'\']+/g);
  const arrIndexes = firstSentence.map(el => el.length - 1);
  let result = '';
  for (let i = 1; i < arrSentences.length; i++) {
    result += arrSentences[i].match(/[\w\'\']+/g)[arrIndexes[i - 1]];
  }
  console.log(arrSentences, firstSentence, arrIndexes, result);
}


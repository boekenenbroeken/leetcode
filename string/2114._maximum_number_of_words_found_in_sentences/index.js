/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (sentences) => {
  let max = 0;

  for (let i = 0; i < sentences.length; i++) {
    max = Math.max(max, sentences[i].split(" ").length);
  }

  return max;
};

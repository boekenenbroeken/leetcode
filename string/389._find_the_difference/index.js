/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let sumS = 0;
  let sumT = 0;

  for (let i = 0; i < s.length; i++) {
    sumS += s[i].charCodeAt();
  }

  for (let i = 0; i < t.length; i++) {
    sumT += t[i].charCodeAt();
  }

  return String.fromCharCode(sumT - sumS);
};

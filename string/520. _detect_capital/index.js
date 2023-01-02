/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) =>
  word === word.toUpperCase() ||
  word === `${word[0]}${word.substring(1).toLowerCase()}`;

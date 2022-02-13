/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    VALUES[s[i]] < VALUES[s[i + 1]]
      ? (result -= VALUES[s[i]])
      : (result += VALUES[s[i]]);
  }

  return result;
};

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => (num === 0 ? 0 : 1 + ((num - 1) % 9));

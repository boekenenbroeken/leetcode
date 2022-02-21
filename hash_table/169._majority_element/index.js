/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const hash = {};

  for (n of nums) {
    hash[n] = hash[n] + 1 || 1;

    if (hash[n] > nums.length / 2) return n;
  }

  return -1;
};

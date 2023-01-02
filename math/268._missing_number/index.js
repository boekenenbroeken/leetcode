/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const sumByLength = (nums.length * (nums.length + 1)) / 2;
  const actualSum = nums.reduce((acc, a) => acc + a);

  return sumByLength - actualSum;
};

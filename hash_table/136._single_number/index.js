/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  if (nums.length === 1) return nums;

  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    !hash[nums[i]] ? (hash[nums[i]] = 1) : (hash[nums[i]] += 1);
  }

  for (let key in hash) {
    if (hash[key] === 1) return key;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return -1;
};

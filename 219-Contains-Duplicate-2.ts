// Given an integer array nums and an integer k, return true
// if there are two distinct indices i and j in the array such
// that nums[i] == nums[j] and abs(i - j) <= k.

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set: Set<number> = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
}

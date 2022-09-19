var twoSum = function (nums: Array<number>, target: number) {
  const hash: any = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[String(target - nums[i])] !== undefined) {
      return [hash[String(target - nums[i])], i];
    }

    hash[String(nums[i])] = i;
  }
};

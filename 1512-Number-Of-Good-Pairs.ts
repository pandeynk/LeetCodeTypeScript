function numIdenticalPairs(nums: number[]): number {
  const frequencyMap: any = {};

  nums.forEach(function (num: number) {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  });

  let goodPairs = 0;
  Object.keys(frequencyMap).forEach(function (item: string) {
    if (frequencyMap[item] > 1) {
      goodPairs += ((frequencyMap[item] - 1) * frequencyMap[item]) / 2;
    }
  });

  return goodPairs;
}

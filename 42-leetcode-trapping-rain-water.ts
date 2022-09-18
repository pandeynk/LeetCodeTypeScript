var trap = function (height) {
  const lArr: Array<number> = [];
  const rArr: Array<number> = [];
  let lMax: number = 0;
  let rMax: number = 0;
  const gap: Array<number> = [];
  let sum: number = 0;

  for (let i = 0; i < height.length; i++) {
    lMax = lMax > (height[i - 1] || 0) ? lMax : height[i - 1] || 0;
    rMax =
      rMax > (height[height.length - i] || 0)
        ? rMax
        : height[height.length - i] || 0;

    lArr[i] = lMax;
    rArr[height.length - 1 - i] = rMax;
  }

  for (let i = 0; i < height.length; i++) {
    gap[i] = (lArr[i] > rArr[i] ? rArr[i] : lArr[i]) - height[i];
    sum += gap[i] < 0 ? 0 : gap[i];
  }

  return sum;
};

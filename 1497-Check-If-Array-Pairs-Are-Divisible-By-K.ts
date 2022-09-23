function canArrange(arr: number[], k: number): boolean {
  const rmMap: any = {};

  arr.forEach((item) => {
    const rem = ((item % k) + k) % k; // find opposite pair number
    rmMap[rem] = (rmMap[rem] || 0) + 1;
  });

  for (let i = 0; i < arr.length; i++) {
    const rem = arr[i] % k; // find remainder
    if (rem === 0) {
      const freq = rmMap[rem];
      if (freq % 2 !== 0) {
        return false;
      }
    } else if (rem * 2 === k) {
      const freq = rmMap[rem];
      if (freq % 2 !== 0) {
        return false;
      }
    } else {
      const f1 = rmMap[rem];
      const f2 = rmMap[k - rem];
      if (f1 !== f2) {
        return false;
      }
    }
  }

  return true;
}

console.log(canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3));

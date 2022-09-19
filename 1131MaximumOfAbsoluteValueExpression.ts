function maxAbsValExpr(arr1: number[], arr2: number[]): number {
  // |arr1[i] + arr2[i] + i| - |arr1[j] + arr2[j] + j|
  if (arr1.length !== arr2.length) return -1;

  if (arr1.length < 2) return -1;

  const x1 = [],
    x2 = [],
    x3 = [],
    x4 = [];

  for (let i = 0; i < arr1.length; i++) {
    x1.push(arr1[i] + arr2[i] + i);
    x2.push(arr1[i] - arr2[i] + i);
    x3.push(-arr1[i] + arr2[i] + i);
    x4.push(-arr1[i] - arr2[i] + i);
  }

  const m1 = Math.max(...x1) - Math.min(...x1);
  const m2 = Math.max(...x2) - Math.min(...x2);
  const m3 = Math.max(...x3) - Math.min(...x3);
  const m4 = Math.max(...x4) - Math.min(...x4);

  return Math.max(m1, m2, m3, m4);
}

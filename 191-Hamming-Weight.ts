function hammingWeight(n: number): number {
  const binary = n.toString(2);
  return binary.split("").reduce((accum, curr) => accum + Number(curr), 0);
}

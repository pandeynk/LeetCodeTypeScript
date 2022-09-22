function reverseBits(n: number): number {
  const reversedBin = n.toString(2).split("").reverse().join("");
  const result = reversedBin.padEnd(32, "0");
  return parseInt(result, 2);
}

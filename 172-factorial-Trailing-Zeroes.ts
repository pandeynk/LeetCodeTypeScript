function trailingZeroes(n: number): number {
  let zeroes = 0;
  // let currentMultiple = 5;

  // while (n >= currentMultiple) {
  //   zeroes += Math.floor(n / currentMultiple);
  //   currentMultiple *= 5;
  // }

  while (n > 0) {
    n = Math.floor(n / 5);
    zeroes += n;
  }

  return zeroes;
}

console.log(trailingZeroes(1000));

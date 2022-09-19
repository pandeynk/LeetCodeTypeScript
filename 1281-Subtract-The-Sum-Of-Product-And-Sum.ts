function subtractProductAndSum(n: number): number {
  const digits = getDigits(n);
  return Math.abs(digitsProduct(digits) - digitsSum(digits));
}

function digitsProduct(digits: Array<string>) {
  return digits.reduce((acc, item) => Number(acc) * Number(item), 1);
}

function digitsSum(digits: Array<string>) {
  return digits.reduce((acc, item) => Number(acc) + Number(item), 0);
}

function getDigits(n: number): Array<string> {
  return String(n).split("");
}

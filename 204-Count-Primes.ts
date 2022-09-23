function countPrimes(n: number): number {
  if (n <= 2) {
    return 0;
  }

  const numbers: boolean[] = new Array(n).fill(false);
  for (let i = 2; i < Number(Math.sqrt(n)); i++) {
    if (!numbers[i]) {
      for (let j = i * i; j < n; j += i) {
        numbers[j] = true;
      }
    }
  }

  let numberOfPrimes = 0;
  for (let i = 2; i < n; i++) {
    if (!numbers[i]) {
      numberOfPrimes++;
    }
  }

  return numberOfPrimes;
}

console.log(countPrimes(21));

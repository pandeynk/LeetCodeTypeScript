function sumFourDivisorsForNumber(num: number): number {
  let orig = num;
  let sum = num; // add itself
  let divisors = 1;
  num = num >> 1 || Math.sqrt(num); // take sqrt of number as divisors happen in pairs

  while (num > 0) {
    if (orig % num === 0) {
      divisors++;
      sum += num;
    }
    num--;
    if (divisors > 4) return 0;
  }

  if (divisors === 4) return sum;

  return 0;
}

function sumFourDivisors(nums: number[]): number {
  let total = 0;
  nums.forEach((num) => {
    total += sumFourDivisorsForNumber(num);
  });

  return total;
}

console.log(sumFourDivisors([21, 21]));

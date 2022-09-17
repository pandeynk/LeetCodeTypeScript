function sumFourDivisors(nums: number[]): number {
  let sum = 0;
  const hash: any = {};
  nums.forEach(function (num) {
    if (!hash[String(num)]) {
      hash[String(num)] = getDivisorsSum(num);
    }
    sum += hash[String(num)];
  });

  return sum;
}

function getDivisorsSum(num: number): number {
  const divisors = [];
  let sum = 0;

  for (let i = 1; i <= Math.floor(num / 2) + 1; i++) {
    if (num % i === 0) {
      divisors.push(i);
      sum += i;

      if (divisors.length === 4) {
        return sum;
      }
    }
  }

  if (divisors.length === 3) return sum + num;

  return 0;
}

console.log(sumFourDivisors([7286, 18704, 70773, 8224, 91675]));

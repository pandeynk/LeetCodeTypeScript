function isSelfDividingNumber(num: number): boolean {
  const numArr = String(num).split("");

  for (let i = 0; i < numArr.length; i++) {
    if (Number(numArr[i]) === 0) {
      return false;
    } else if (num % Number(numArr[i]) !== 0) {
      return false;
    }
  }

  return true;
}

function selfDividingNumbers(left: number, right: number): number[] {
  const numbers: number[] = [];
  const nums = [];
  for (let i = left; i <= right; i++) {
    nums.push(i);
  }

  nums.forEach((n) => {
    if (isSelfDividingNumber(n)) {
      numbers.push(n);
    }
  });

  return numbers;
}

console.log(selfDividingNumbers(1, 22));

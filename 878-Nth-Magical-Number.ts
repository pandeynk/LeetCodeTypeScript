const nthMagicalNumber = function (n: number, a: number, b: number): number {
  const gcd = (x: number, y: number): number => {
    if (x == 0) return y;
    return gcd(y % x, x);
  };

  const MOD = 1000000007;
  const L = (a / gcd(a, b)) * b;
  const M = L / a + L / b - 1;
  const q = Math.trunc(n / M),
    r = n % M;

  let ans = (q * L) % MOD;
  if (r == 0) return ans;

  let heads = [a, b];
  for (let i = 0; i < r - 1; ++i) {
    if (heads[0] <= heads[1]) heads[0] += a;
    else heads[1] += b;
  }

  ans += Math.min(heads[0], heads[1]);
  return ans % MOD;
};

console.log(nthMagicalNumber(4, 2, 3));

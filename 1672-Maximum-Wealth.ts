function maximumWealth(accounts: number[][]): number {
  let maxWealth = 0;
  accounts.forEach(function (account) {
    maxWealth = Math.max(
      maxWealth,
      account.reduce((acc, item) => acc + item, 0)
    );
  });

  return maxWealth;
}

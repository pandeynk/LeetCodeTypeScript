function rand7() {
  return Math.random() * 7 + 1;
}

function rand10(): number {
  const rows = rand7();
  const cols = rand7();

  const value = (rows - 1) * 7 + cols;

  if (value > 40) {
    return rand10();
  }

  return (value % 10) + 1;
}

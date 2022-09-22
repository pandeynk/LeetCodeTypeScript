function convertToTitle(columnNumber: number): string {
  const alphabets: string = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let title = "";

  while (columnNumber > 0) {
    console.log(columnNumber);
    const remainder = Math.floor(columnNumber % 26);
    if (remainder === 0) {
      title += alphabets[26];
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      title += alphabets[remainder];
      columnNumber = Math.floor(columnNumber / 26);
    }
  }

  return title.split("").reverse().join("");
}

console.log(convertToTitle(701));

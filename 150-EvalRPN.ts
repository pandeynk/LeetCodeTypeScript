function evalRPN(tokens: string[]): number {
  const operators = ["+", "-", "/", "*"];

  let currentPosition = 0;
  while (tokens.length > 1) {
    while (!operators.includes(tokens[currentPosition])) {
      currentPosition++;
    }

    const operator = tokens[currentPosition];
    const number1 = Number(tokens[currentPosition - 1]);
    const number2 = Number(tokens[currentPosition - 2]);

    switch (operator) {
      case "+":
        tokens[currentPosition] = String(number1 + number2);
        break;
      case "-":
        tokens[currentPosition] = String(number1 - number2);
        break;
      case "*":
        tokens[currentPosition] = String(number1 * number2);
        break;
      case "/":
        tokens[currentPosition] = String(Math.trunc(number1 / number2));
        break;
    }

    tokens.splice(currentPosition - 2, 2);
    currentPosition -= 1;
  }

  return Number(tokens[0]);
}

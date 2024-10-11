function calculate() {
  const num1 = document.getElementById("num1").value;
  const operation = document.getElementById("operation").value;
  const num2 = document.getElementById("num2").value;
  const resultDiv = document.getElementById("result");

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    resultDiv.textContent = "Invalid input. Please enter valid numbers.";
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (number2 === 0) {
        resultDiv.textContent = "Error: Division by zero is not allowed.";
        return;
      }
      result = number1 / number2;
      break;
    default:
      resultDiv.textContent = "Invalid operation. Please use +, -, *, or /.";
      return;
  }

  resultDiv.textContent = `Result: ${result}`;
}

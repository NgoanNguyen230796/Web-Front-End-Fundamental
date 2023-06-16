let number1 = Number(prompt("Nhập vào số thứ 1"));
let number2 = Number(prompt("Nhập vào số thứ 2"));
let calculation = prompt("Nhập vào phép tính");
let result = 0;
debugger;
switch (calculation) {
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
    result = number1 / number2;
    break;

  case "%":
    result = number1 % number2;
    break;

  default:
    console.log("Rất tiếc phải nói rằng phép tính bạn nhập không hợp lệ");
}
console.log("KQ là:" + result);

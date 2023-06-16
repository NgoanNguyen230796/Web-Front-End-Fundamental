function squareOfANumber(number) {
  return Math.pow(number, 2);
}
let value = Number(prompt("Nhập vào số bạn muốn tính bình phương"));
let numberSquare = squareOfANumber(value);
alert(`Bình phương của ${value} là: ${numberSquare}`);

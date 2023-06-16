let number1 = Number(prompt("Nhập số thứ 1"));
let number2 = Number(prompt("Nhập số thứ 2"));
let number3 = Number(prompt("Nhập số thứ 3"));
if (number1 > number2 && number1 > number3) {
  console.log("Số lớn nhất là:" + number1);
} else if (number2 > number3 && number2 > number1) {
  console.log("Số lớn nhất là:" + number2);
} else {
  console.log("Số lớn nhất là:" + number3);
}
if (number1 < number2 && number1 < number3) {
  console.log("Số nhỏ nhất là:" + number1);
} else if (number2 < number3 && number2 < number1) {
  console.log("Số nhỏ nhất là:" + number2);
} else {
  console.log("Số nhỏ nhất là:" + number3);
}

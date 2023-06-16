let number = Number(prompt("Nhập vào dãy số mà bạn mong muốn"));
let donVi;
let reversNumber="";
while (number > 0) {
  donVi = number % 10;
  number = Math.floor(number / 10);
  reversNumber+=donVi;
}
console.log("Số đảo ngược là:",reversNumber);

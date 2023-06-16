// function kiểm tra chẵn và lẻ
function evenOdd(number) {
  if (number % 2 == 0) {
    console.log("Số vừa nhập là số chẵn");
  } else {
    console.log("Số vừa nhập là số lẻ");
  }
}
//function kiểm tra số nguyên tố
function primeNumber(number) {
  if (number < 2) {
    console.log(`Số bạn vừa nhập không phải là số nguyên tố`);
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        console.log(`Số  ${number} k là số nguyên tố`);
      }
    }
    console.log(`Số  ${number} là số nguyên tố`);
  }
}
////function kiểm tra số hoàn hảo
function perfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    sum += i;               
    if (number % i == 0) {
    }
  }
  if (sum == number) {
    console.log(`${number} là số hoàn hảo`);
  } else {
    console.log(`${number} không phải là số hoàn hảo`);
  }
}
let number = Number(prompt("Nhập vào 1 số nguyên dương bất kỳ"));
evenOdd(number);
primeNumber(number);
perfectNumber(number);

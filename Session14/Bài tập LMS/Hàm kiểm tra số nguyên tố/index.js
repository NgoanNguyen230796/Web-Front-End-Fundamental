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

let number = Number(prompt("Nhập vào 1 số nguyên dương bất kỳ"));
primeNumber(number);

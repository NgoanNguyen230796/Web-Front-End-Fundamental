let number = Number(prompt("Nhập vào 1 số nguyên"));
let count = 0;
if (number < 2) {
  console.log("Số bạn vừa nhập không phải là số nguyên tố");
}
else{
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      count++;
    }
  }
}
if (count == 0) {
  console.log("Số bạn vừa nhập là số nguyên tố");
} else {
  console.log("Số bạn vừa nhập không phải là số nguyên tố");
}



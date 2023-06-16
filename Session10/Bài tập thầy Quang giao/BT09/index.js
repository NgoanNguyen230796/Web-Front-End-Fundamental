let number = Number(prompt("Nhập vào 1 số nguyên dương"));
let j = 1;
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(`Ước số thứ ${j} của  ${number} là: ${i}`);
    j++;
  }
}

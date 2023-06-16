let number = Number(prompt("Nhập vào 1 số nguyên"));
let sum = 0;
let i = 1;
let j = 1;
while (i <= number) {
  if (i % 2 == 0) {
    console.log(`Các số chẵn thứ ${j} là: ${i}`);
    j++;
    sum += i;
  }
  i++;
}
console.log(`Tổng các số chẵn từ 1 đến ${number} là: ${sum}`);
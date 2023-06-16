function average(arrayNumber) {
  if(arrayNumber.length==0){
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    sum += arrayNumber[i];
  }
  return sum / arrayNumber.length;
}
let arrayNumber = [];
let n = prompt("Nhập vào độ dài của mảng");
for (let i = 0; i < n; i++) {
  let number = Number(prompt(`Nhập vào phần tử thứ ${i + 1}`));
  arrayNumber.push(number);
}
console.log("Trung bình cộng của một mảng số là:", average(arrayNumber));

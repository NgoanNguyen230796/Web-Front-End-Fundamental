function minNumber(array){
    return Math.min(...array);
}
let arrayNumber=[];
let n = Number(prompt("Nhập vào độ dài của mảng"));
for (let i = 0; i < n; i++) {
  let number=Number(prompt(`Nhập vào phần tử thứ ${i+1} trong mảng`));
  arrayNumber.push(number);
}
console.log("Mảng ban đầu là:", arrayNumber);
console.log("Giá trị lớn nhất trong mảng là:", minNumber(arrayNumber));
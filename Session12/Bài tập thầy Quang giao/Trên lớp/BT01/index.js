let arrNumber = [];
for (let index = 0; index < 5; index++) {
  // let number=Number(prompt("Nhập vào số thứ "+(index+1)));
  // arrNumber.push(number);
  arrNumber.push(Number(prompt("Nhập vào số thứ " + (index + 1))));
}
console.log("Các phần tử là số chẵn là:")
for (let index = 0; index < arrNumber.length; index++) {
  if (arrNumber[index] % 2 == 0) {
    console.log(arrNumber[index]);
  }
}
//Xóa phần tử ở cuối mảng
arrNumber.pop();
console.log("Mảng sau khi xóa phần tử ở cuối mảng là:",arrNumber);
//Thêm 2 phần tử có giá trị là 1,2 ở đầu mảng (unshift)
arrNumber.unshift(1, 2);
console.log("Mảng sau khi thêm 2 phần tử có giá trị là 1,2 ở đầu mảng là:", arrNumber);
// Xóa phần tử đầu tiên của mảng (shift)
arrNumber.shift();
console.log("Mảng sau khi xóa phần tử đầu tiên của mảng là:", arrNumber);

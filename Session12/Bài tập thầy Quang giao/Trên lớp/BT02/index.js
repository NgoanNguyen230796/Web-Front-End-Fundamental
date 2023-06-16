let n = Number(prompt("Nhập số dòng của mảng"));
let m = Number(prompt("Nhập số cột của mảng"));
let arrNumber = [];
for (let i = 0; i < m; i++) {
  arrNumber[i] = [];
}
//  Output: [ [ <m empty items> ], [ <m empty items> ], [ <m empty items> ], [ <m empty items> ] ]
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // arrNumber[i][j] = Number(prompt("Nhập vào số[" + i + "]" + "[" + j + "]"));
    arrNumber[i][j] = Number(prompt(`Nhập vào số [${i}][${j}]`));
  }
}
console.log("Mảng 2 chiều mà bạn vừa nhập các phần tử là:");
console.log(arrNumber);
let max = arrNumber[0][0];
console.log("Phần tử có giá trị max trong mảng 2 chiều là:");
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (max < arrNumber[i][j]) {
      max = arrNumber[i][j];
    }
  }
}
console.log(max);
console.log("Phần tử có giá trị min trong mảng 2 chiều là:");
let min = arrNumber[0][0];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (min > arrNumber[i][j]) {
      min = arrNumber[i][j];
    }
  }
}
console.log(min);

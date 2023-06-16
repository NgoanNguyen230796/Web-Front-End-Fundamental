let n = Number(prompt("Nhập số dòng của mảng 2 chiều"));
let m = Number(prompt("Nhập số cột của mảng 2 chiều"));
let arrInt = [];
for (let i = 0; i < m; i++) {
  arrInt[i] = [];
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arrInt[i][j] = Number(prompt(`Nhập vào giá trị của phần tử [${i}][${j}]:`));
  }
}
console.log("Mảng sau khi nhập giá trị vào là:", arrInt);

console.log("Các phần tử nằm trên đường biên là:");
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == m - 1) {
          console.log(arrInt[i][j]);
      }
  }
}
if (n != m) {
  console.log("Không có đường chéo chính và chéo phụ");
} else {
  let sumChinh = 0;
  let sumPhu = 0;
  console.log("Các phần tử nằm trên đường chéo chính là:");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == j) {
        console.log(arrInt[i][j]);
      }
    }
  }
  console.log("Các phần tử nằm trên đường chéo phụ là:");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i + j == n - 1) {
        console.log(arrInt[i][j]);
      }
    }
  }
}
let medial;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m-1; j++) {
    for (let k = j+1; k < m; k++) {     
      if(arrInt[i][j]>arrInt[i][k]){
        let temp = arrInt[i][j];
        arrInt[i][j] = arrInt[i][k];
        arrInt[i][k] = temp;
      }
      }
    }
  }
console.log("Sắp xếp mảng tăng dần theo dòng không sử dụng hàm sort là:",arrInt);
console.log("Sắp xếp mảng tăng dần (sử dụng hàm sort)là:");
arrInt.sort((a, b) => a - b);
console.log(arrInt);

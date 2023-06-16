let arrayInt = [];
let sumEven = 0;
let sumOdd = 0;
for (let index = 0; index < 5; index++) {
  arrayInt[index] = Number(prompt("Nhập vào giá trị thứ " + (index + 1)));
}
console.log("Giá trị các phần tử trong mảng là:");
for (let i = 0; i < arrayInt.length; i++) {
  console.log(arrayInt[i]);
}
console.log("Các phần tử có giá trị chẵn là:");
for (let i = 0; i < arrayInt.length; i++) {
  if (arrayInt[i] % 2 == 0) {
    console.log(arrayInt[i]);
    sumEven += arrayInt[i];
  }
}
console.log("Tổng các phần tử có giá trị chẵn là:", sumEven);
console.log("Các phần tử có giá trị lẻ là:");
for (let i = 0; i < arrayInt.length; i++) {
  if (arrayInt[i] % 2 == 1) {
    console.log(arrayInt[i]);
    sumOdd += arrayInt[i];
  }
}
console.log("Tổng các phần tử có giá trị lẻ là:", sumOdd);
console.log("Các số nguyên tố là:");
for (let i = 0; i < arrayInt.length; i++) {
  let check = true;
  if (arrayInt[i] >= 2) {
    for (index = 2; index <= Math.sqrt(arrayInt[i]); index++) {
      if (arrayInt[i] % index == 0) {
        check = false;
        break;
      }
    }
    if (check) {
      console.log(arrayInt[i]);
    }
  }
}
console.log("Phần tử có giá trị lớn nhất trong mảng là:");
let max = arrayInt[0];
for (let i = 1; i < arrayInt.length; i++) {
  if (max < arrayInt[i]) {
    max = arrayInt[i];
  }
}
console.log(max);
console.log("Phần tử có giá trị nhỏ nhất trong mảng là:");
let min = arrayInt[0];
for (let i = 1; i < arrayInt.length; i++) {
  if (min > arrayInt[i]) {
    min = arrayInt[i];
  }
}
console.log(min);
console.log("Sắp xếp mảng theo thứ tự giảm dần là:");
let medial;
for (let i = 0; i < arrayInt.length - 1; i++) {
  for (let j = i + 1; j < arrayInt.length; j++) {
    if (arrayInt[i] < arrayInt[j]) {
      medial = arrayInt[i];
      arrayInt[i] = arrayInt[j];
      arrayInt[j] = medial;
    }
  }
}
console.log(arrayInt);
console.log("Sắp xếp mảng theo thứ tự giảm dần (sử dụng hàm sort)là:");
arrayInt.sort((a, b) => b - a);
console.log(arrayInt);

let number = Number(prompt("Nhập vào 1 số nguyên để thống kê"));
let count = 0;
for (let i = 0; i < arrayInt.length; i++) {
  if (arrayInt[i] == number) {
    count++;
  }
}
if (count > 0) {
  console.log(`Có ${count} phần tử có giá trị giống với phần tử vừa nhập`);
} else {
  console.log(`Không có phần tử nào giống như ${number} vừa nhập cả`);
}

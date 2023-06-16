let total = 0;
do {
  let number = Number(prompt("Nhập vào số nguyên"));
  if (number > 0) {
      total += number;
  } else {
    break;
  }
} while (true);
alert(`Tổng từ các số nguyên là: ${total}`);

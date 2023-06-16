function century(number) {
  if (number % 100 == 0) {
    return number / 100;
  } else {
    return Math.floor(number / 100) + 1;
  }
}

let year = Number(prompt("Nhập vào số năm mà bạn muốn tính:"));
let convert = century(year);
alert(`Năm:${year} là thế kỷ ${convert}`);

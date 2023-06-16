function firstString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
let string = prompt("Nhập vào 1 từ");
console.log(`Sau khi chuẩn hóa ${string} là ${firstString(string)}`);

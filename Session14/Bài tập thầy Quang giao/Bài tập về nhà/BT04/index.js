function get10Characters(string) {
  if(string.length>15){
    let getStringAndPush = string.slice(0, 10).concat("...");
    return getStringAndPush;
  }
  return string;
}
let string15Characters = prompt("Nhập vào chuỗi ký tự");
console.log("Chuỗi ban đầu là:", string15Characters);
let convert = get10Characters(string15Characters);
console.log("Chuỗi sau khi cắt 10 ký tự đầu và thêm ... đằng sau là:", convert);
length
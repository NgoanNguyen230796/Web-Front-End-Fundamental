let physics=Number(prompt('Nhập vào điểm vật lý:'));
let chemistry=Number(prompt('Nhập vào điểm hóa học:'));
let biology=Number(prompt('Nhập vào điểm sinh học:'));

let sum =physics+chemistry+biology;
let average =sum/3;
document.write('Tổng điểm của bạn là:'+sum+'<br>');
document.write('Điểm TB của bạn là:'+average);

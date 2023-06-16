const PI = 3.14;
let r = Number(prompt('Nhập vào giá trị của bán kính R:'));
let perimeter=2*r*PI;
let acreage=Math.pow(r,2)*PI;
document.write('Chu vi hình tròn là: '+perimeter+'<br>');
document.write('Diện tích hình tròn là: '+acreage);
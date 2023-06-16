let number = Number(prompt('Nhập vào số có 3 chữ số:'));
let tmp;
let res=0;
while(number>0){
    tmp= number%10;
    res = res * 10 + tmp;
    number = Math.floor(number / 10);
}
document.write('Số đảo ngược của là:' +res);
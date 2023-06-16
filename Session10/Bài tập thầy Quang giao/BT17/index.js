let number1 =Number(prompt("Nhập vào số thứ 1"));
let number2 =Number(prompt("Nhập vào số thứ 2"));
let number3 =Number(prompt("Nhập vào số thứ 3"));
let max=number1;
let min=number1;
if(max<number2){
    max=number2;
}
if(max<number3){
    max=number3;
}
if(min>number2){
    min=number2;
}
if(min>number3){
    min=number3;
}
console.log("Kết quả sau khi sắp xếp là:");
console.log(max);
if(max!=number1 && min!=number1){
    console.log(number1);
}
if(max!=number2 && min!=number2){
    console.log(number2);
}
if(max!=number3 && min!=number3){
    console.log(number3);
}
console.log(min);

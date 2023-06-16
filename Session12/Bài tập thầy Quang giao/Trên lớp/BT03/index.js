let arrNumber=[];
//Nhập vào mảng 1 chiều gồm 5 phần tử bàn phím.
for (let index = 0; index < 5; index++) {
    arrNumber[index]=Number(prompt("Nhập vào số thứ "+(index+1)));
   
}
console.log(arrNumber);
//Sử dụng for..in để in ra các phần tử của mảng
for(let index in arrNumber){
    console.log("Các phần tử của mảng là:",arrNumber[index]);
}
//Sử dụng for..of để in ra các phần tử lẻ trong mảng
for (let index of arrNumber) {
    if(index%2==1){
        console.log("Các phần tử lẻ trong mảng là:",index);
    }
    
}
//Sử dung for để in ra các phần tử từ cuối lên đầu
for(let index=arrNumber.length-1;index>=0;index--){
    console.log("Các phần tử từ cuối lên đầu là:",arrNumber[index]);
}

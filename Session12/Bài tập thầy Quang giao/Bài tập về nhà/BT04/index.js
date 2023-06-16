let array=[];
let sum=0;
do{
    let number=Number(prompt("Nhập vào các số"));
    if(isNaN(number) || number==""||number=="Cancel"){
        break;
    }else{
        console.log("Các phần tử đã nhập vào là:",number);
        array.push(number);
    }
}
while(true);
for(let i=0;i<array.length;i++){
    sum+=array[i];
}
console.log("Tổng các giá trị của mảng là:",sum);
// in ra phần tử có giá trị max k sử dụng hàm Math.max
let max=array[0];
for(let i=1;i<array.length;i++){
    if(max<array[i]){
        max=array[i];
    }
}
console.log("Phần tử có giá trị lớn nhất trong mảng k sử dụng hàm Math.max là:",max);
console.log("Phần tử có giá trị lớn nhất sử dụng hàm Math.max",Math.max(...array));
let min=array[0];
for(let i=1;i<array.length;i++){
    if(min>array[i]){
        min=array[i];
    }
}
console.log("Phần tử có giá trị nhỏ nhất trong mảng k sử dụng hàm Math.min là:",min);
console.log("Phần tử có giá trị nhỏ nhất trong mảng sử dụng hàm Math.min là:",Math.min(...array));

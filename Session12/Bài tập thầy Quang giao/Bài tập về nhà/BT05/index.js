let a=Number(prompt("Nhập vào số nguyên a"));
let b=Number(prompt("Nhập vào số nguyên b"));
let arrayInt=[];
if(a<b){
    for(let i=(a+1);i<b;i++){
        arrayInt.push(i);
    }
}else{
    for(let i=(b+1);i<a;i++){
        arrayInt.push(i);
    }
}
console.log("a mảng số nguyên mà giá trị nằm giữa a và b là:",arrayInt);
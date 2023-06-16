let number=Number(prompt("Nhập vào giá trị mong muốn"));
let array=[1,3,9,-12,7,8,6,20];
for(let i=0;i<array.length;i++){
    if(number==array[i]){
        console.log(`Giá trị ${number} được tìm thấy trong mảng tại vị trí ${i}`);
    }

}
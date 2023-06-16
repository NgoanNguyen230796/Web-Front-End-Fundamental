let notification =confirm('“Bạn có phải học viên Rikkei Academy');
if(notification==true){
let studentCode =prompt('Nhập mã sinh viên của bạn:');
let studentName=prompt('Nhập tên của bạn:');
console.log(studentName,'-',studentCode);
}
else{
    alert('Chương trình kết thúc');
}
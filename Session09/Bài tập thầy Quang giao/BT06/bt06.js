let studentCode=prompt('Nhập vào mã sinh viên');
let studentName=prompt('Nhập vào tên sinh viên');
let studentAge=prompt('Nhập vào tuổi sinh viên');
let pointHtml=Number(prompt('Nhập vào điểm HTML'));
let pointCss= Number(prompt('Nhập vào điểm CSS'));
let pointJavascript=Number(prompt('Nhập vào điểm Javascript'));
let average=(pointHtml+pointCss+pointJavascript)/3;
document.write('Mã sinh viên:'+studentCode+'<br>');
document.write('Tên sinh viên:'+studentName+'<br>');
document.write('Tuổi sinh viên:'+studentAge+'<br>');
document.write('Điểm trung bình:'+average);
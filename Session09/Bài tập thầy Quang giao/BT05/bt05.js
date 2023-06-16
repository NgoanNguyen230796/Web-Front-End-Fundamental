let rate=Number(prompt('Nhập vào hệ số lương'));
let basicSalary=Number(prompt('Nhập vào lương cơ bản'));
let commission=Number(prompt('Nhập vào tỷ lệ hoa hồng'));
let basic = (rate+commission)*basicSalary;
document.write('Lương của nhân viên là:'+basic);

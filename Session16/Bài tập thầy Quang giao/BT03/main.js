let salaryCompany={
    nhanVien:1000,
    truongPhong:2000,
    phoGiamDoc:4000,
    giamDoc:5000
};

function sumSalaryCompany(obj){
    let sum=0;
    for (let i in obj) {
        sum+=obj[i];
    }
    return sum;
}
console.log("Tổng lương của các nhân viên trong phòng là:",sumSalaryCompany(salaryCompany));

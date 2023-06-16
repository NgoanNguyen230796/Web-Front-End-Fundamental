function tinhSoNgay() {
  var month = Number(frm.month.value);
  var year = Number(frm.year.value);
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById("hienThiSoNgay").innerHTML ="Tháng bạn vừa nhập có 31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById("hienThiSoNgay").innerHTML ="Tháng bạn vừa nhập có 30 ngày";
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        document.getElementById("hienThiSoNgay").innerHTML ="Tháng bạn vừa nhập có 29 ngày";
      } else {
        document.getElementById("hienThiSoNgay").innerHTML ="Tháng bạn vừa nhập có 28 ngày";
      }
      break;

    default:
      document.getElementById("hienThiSoNgay").innerHTML ="Vui lòng nhập số tháng và số năm cho đúng";
  }
}

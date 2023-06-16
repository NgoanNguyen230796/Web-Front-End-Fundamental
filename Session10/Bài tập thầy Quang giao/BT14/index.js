//B1 Nhập số n
let n = Number(prompt("Nhập vào số nguyên n"));
if (n < 2) {
  console.log("Số này không phải là số nguyên tố");
} else {
  //B2 Duyệt các số từ 1 -n ---->for(index)
  for (let index = 2; index < n; index++) {
    let checkPrime = true; //B3:Đặt cờ checkPrime =true --->Số nguyên tố
    //B4 Kiểm tra index xem có phải là số nguyên tố hay không
    //duyệt từ 2-->sqrt(index)
    for (let i = 2; i <= Math.sqrt(index); i++) {
      //index%i==0 -->checkPrime =false ( không phải là số nguyên tố)
      // break;
      if (index % i == 0) {
        checkPrime = false;
        break;
      }
    }
    if (checkPrime) {
      console.log("Các số nguyên tố là:", index);
    }
  }
}


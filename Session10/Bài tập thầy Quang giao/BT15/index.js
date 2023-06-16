//B1 Nhập vào số tiền gửi ngân hàng ban đầu, lãi suất năm, số tháng gửi.
let amount=Number(prompt("Nhập vào số tiền gửi ngân hàng "));
let rate=Number(prompt("Nhập vào lãi suất năm"));
let month=Number(prompt("Nhập vào số tháng gửi"));

//B2 Tính lãi suất tháng 
let rateMonth=rate/12;

//B3 Tổng số tiền lãi interest =0;
let interest=0;
//B4 Duyệt các tháng gửi - Tính tiền lãi hàng tháng ---for
for(let i=1;i<=month;i++){
    //Tính lãi 1 tháng
   let interestMonth =(rateMonth*amount)/100;
   //Lãi nhập gốc
   amount+=interestMonth;
   //Cộng dồn số tiền lãi
   interest+=interestMonth;
}

console.log("Tiền nhận sau khi kết thúc gửi là:"+amount);
console.log("Tiền lãi nhận sau khi kết thúc gửi là:"+interest);
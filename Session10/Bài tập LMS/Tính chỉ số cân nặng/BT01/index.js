let weight = Number(prompt("Nhập cân nặng của bạn(kg)"));
let height = Number(prompt("Nhập chiều cao của bạn (m)"));
let bmi = weight /Math.pow(height,2);
if (bmi < 18) {
  console.log("Thiếu cân");
} else if (bmi < 25) {
    console.log("Bình thường");
} else if (bmi < 30) {
   console.log("Thừa cân");
} else {
   console.log("Béo phì");
}

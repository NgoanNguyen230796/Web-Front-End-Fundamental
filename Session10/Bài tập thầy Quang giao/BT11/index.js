let number;
let sum = 0;
do {
  number = Number(prompt("Hãy nhập vào 1 số"));
  if (number < 0) {
    alert("Số bạn vừa nhập nhỏ hơn 0 vui lòng nhập lại");
  } else {
    for (let i = 1; i < number; i++) {
      if (number % i == 0) {
        sum += i;
      }
    }
    if (sum == number) {
      alert(`${number} là số hoàn hảo`);
      break;
    } else {
      alert(`${number} không phải là số hoàn hảo`);
      break;
    }
  }
} while (true);
let calculator = {
  number1: 0,
  number2: 0,
  Read: function (a, b) {
    this.number1 = a;
    this.number2 = b;
  },
  Sum: function () {
    return this.number1 + this.number2;
  },
  Mul: function () {
    return this.number1 * this.number2;
  },
};
calculator.Read(11,21);
console.log("Tổng giá trị đã lưu:", calculator.Sum());
console.log("Tích các giá trị đã lưu:", calculator.Mul());

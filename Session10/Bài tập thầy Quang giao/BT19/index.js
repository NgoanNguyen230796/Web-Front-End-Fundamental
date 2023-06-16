for (let i = 1; i < 10;i++) {
  for (let j = 0; j < 10;j++) {
    for (let k = 0; k < 10;k++) {
      let pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
      let plus = i * 100 + j * 10 + k;
      if (pow == plus) {
        console.log(`Các số Armstrong có 3 chữ số là: ${pow}`);
      }
    }
  }
}

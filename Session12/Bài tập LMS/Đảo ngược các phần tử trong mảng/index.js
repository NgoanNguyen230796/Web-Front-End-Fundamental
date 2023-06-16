let array = [1, 3, 9, -4, -7, 2];
let arrayReverse = [];
console.log("Mảng ban đầu là:", array);
for (let i = array.length - 1; i >= 0; i--) {
  arrayReverse.push(array[i]);
}
console.log("Mảng sau khi đảo ngược là:", arrayReverse);

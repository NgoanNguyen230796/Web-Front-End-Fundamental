let edge1 = Number(prompt("Nhập cạnh thứ 1"));
let edge2 = Number(prompt("Nhập cạnh thứ 2"));
let edge3 = Number(prompt("Nhập cạnh thứ 3"));
if (edge1 < edge2 + edge3 && edge2 < edge3 + edge1 && edge3 < edge2 + edge1) {
  console.log("Đây là tam giác");
} else if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
  console.log("Đây là tam giác cân");
} else if (
  edge1 * edge1 == edge2 * edge2 + edge3 * edge3 ||
  edge2 * edge2 == edge1 * edge1 + edge3 * edge3 ||
  edge3 * edge3 == edge1 * edge1 + edge2 * edge2
) {
  console.log("Đây là tam giác vuông");
} else if (
  (edge1 * edge1 == edge2 * edge2 + edge3 * edge3 && edge2 == edge3) ||
  (edge2 * edge2 == edge1 * edge1 + edge3 * edge3 && edge1 == edge3) ||
  (edge3 * edge3 == edge1 * edge1 + edge2 * edge2 && edge1 == edge2)
) {
  console.log("Đây là tam giác vuông cân");
} else if (edge1 == edge2 && edge2 == edge3) {
  console.log("Đây là tam giác đều");
} else {
  console.log("Ba cạnh không phải là 3 cạnh của 1 tam giác");
}

let menu = {
  width: 20,
  height: 40,
  title: "Menu hải sản",
};

function multiplication2Number(object) {
  let multi=1;
  for (let i in object) {
    if (!isNaN(object[i])) {
      multi *= object[i];
    }
  }
  return multi;
}
console.log("Hàm nhân 2 giá trị các thuộc tính có giá trị là number là:",multiplication2Number(menu));


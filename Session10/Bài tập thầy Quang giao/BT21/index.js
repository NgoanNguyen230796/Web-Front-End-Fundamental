let fuel; //số lượng nhiên liệu muốn nạp vào
let numberOfAstronauts; //số lượng phi hành gia sẽ vào
let usedFuel = 0; //nhiên liệu đã sử dụng
let maximumHeight;//Độ cao tối đa mà tàu con thoi có thể đạt được
do {
  fuel = Number(prompt("Hãy nhập số lượng nhiên liệu muốn nạp vào"));
  if(isNaN(fuel)){
    alert("Chỉ chấp nhận nhiên liệu của tàu con thoi là số");
  }else{
    if (fuel < 5000 || fuel > 30000) {
      alert("Chỉ chấp nhận nhiên liệu của tàu con thoi trong khoảng 5000 đến 30000");
    } else {
      break;
    }
  }
} while (true);
do {
  numberOfAstronauts = Number(prompt("Hãy nhập số lượng phi hành gia sẽ vào"));
  if(isNaN(numberOfAstronauts)){
    alert("Chỉ chấp nhận số lượng phi hành gia là số");
  }else{
    if (numberOfAstronauts < 1 || numberOfAstronauts > 7) {
      alert("Chỉ chấp nhận số phi hành gia từ 1-7");
    } else {
      break;
    }
  }
} while (true);
let resource50km = 100*numberOfAstronauts;
let times =Math.floor(fuel/resource50km);
let maxHeight=times*50;
let resourceRemain = fuel%resource50km;
alert("Độ cao tối đa:"+maxHeight +"Km "+" Số nhiên liệu còn lại:"+resourceRemain);

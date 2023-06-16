let number1=Number(prompt("Nhập vào số thứ 1"));
let number2=Number(prompt("Nhập vào số thứ 2"));
let number3=Number(prompt("Nhập vào số thứ 3"));
let multiply =(number1*number2*number3);
if(multiply>0){
    console.log("dấu của tích 3 số là dấu +");
}
else if(multiply==0){
    console.log(0);
}
else{
    console.log("dấu của tích 3 số là  dấu -");
}
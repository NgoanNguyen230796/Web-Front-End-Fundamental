
let arrInt=[];   
function add(){
    let number=Number(frm.numberInput.value);
    arrInt.push(number);
    frm.numberInput.value="";
    frm.numberInput.focus();
}
function show(){
    let show="";
    for(let i=0;i<arrInt.length;i++){
        show += "Element " + i + " = " + arrInt[i] + "<br/>";
        document.getElementById("showArray").innerHTML= show;
    }
}

  
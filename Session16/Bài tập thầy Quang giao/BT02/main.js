
let example = {

};
function isCheck(obj){
    let listExampleKey=Object.keys(obj);
    if(listExampleKey.length>0){
        return true;      
    }else{
        return false;
    }
}
console.log(isCheck(example));

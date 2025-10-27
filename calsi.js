let input=document.querySelector("input");
input.classList.add("input");
function insertValue(value){
    input.value=input.value+value;
}
function allClear(){
    input.value=" ";
}
function singleDelete(){
    input.value=input.value.slice(0,-1);
}
function calculate(){
    input.value=eval(input.value,-1,0);
}
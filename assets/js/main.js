const kayCodesStart=document.getElementById("kayCodesStart");
const key=document.getElementById("Key");
const keyCode=document.getElementById("KeyCode");
const code=document.getElementById("Code");
window.addEventListener("keyup",e =>{
    console.log(e);
    key.innerText=e.key
    keyCode.innerText=e.keyCode
    code.innerText=e.code
    kayCodesStart.innerText=e.keyCode
})
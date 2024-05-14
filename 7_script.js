const tt=document.querySelector('.tt');
const box=document.querySelector('.box');
const ti=document.querySelector('.ti');
let isdark=true;

tt.onclick=function(){
    box.classList.toggle('dark');
    tt.classList.toggle('active');
    isdark=!isdark;
}

const display=document.querySelector('#display');
const buttons=document.querySelectorAll('button');

buttons.forEach(item => {
    item.onclick=() => {
        if(item.id=='clear'){
            display.innerText=' ';
        }
        else if(item.id=='backspace'){
            display.innerText = display.innerText.slice(0, -1);
        }
        else if(display.innerText!=' ' && item.id=='equal'){
            display.innerText=eval(display.innerText);
        }
        else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
          } else {
            display.innerText += item.id;
          }
    };   
});
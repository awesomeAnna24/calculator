"use strict";
// ONCLICK EVENTS
document.querySelector("#one").addEventListener('click', onePressed);
document.querySelector("#two").addEventListener('click', twoPressed);
document.querySelector("#add").addEventListener('click', addPressed);
document.querySelector("#subtract").addEventListener('click', subtractPressed);
document.querySelector("#enter").addEventListener('click', enterPressed);
document.querySelector("#reset").addEventListener('click', resetPressed);

// VARIABLES
let total = 0;
let number = 0;

// FUNCTIONS
function resetPressed(){
    total = 0;
    document.querySelector(".input").value = 0;
    document.querySelector(".display").value = 0;
}

function onePressed(){
    number = 1;
     // number = Number(document.getElementById("one").innerHTML);
    document.querySelector(".input").value = `${ number}`;
    document.querySelector(".display").value = `= ${ total}`;
}
function twoPressed(){
    number = 2;
    document.querySelector(".input").value = `${ number}`;
    document.querySelector(".display").value = `= ${ total}`;
}
function addPressed(){
    document.querySelector(".input").value = `${number} +`;
    total += number;
    document.querySelector(".display").value = `= ${ total}`;  
    console.log(total)
}
function subtractPressed(){
    document.querySelector(".input").value = `${total} -`;
    total -= number;
    document.querySelector(".display").value = `= ${ total}`;  
}

function enterPressed(){
    document.querySelector(".display").value = `= ${total}`;
}

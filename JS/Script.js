const nav=document.querySelector(".nav-menu-content");
const icon=document.querySelector(".nav-menu-img");
const search=document.querySelector(".search-tab");
const searc = document.querySelector(".fas.fa-search");
const dropil = document.querySelector(".il-drop");
const droppyq = document.querySelector(".pyq-drop");
const dropCBSE_il = document.querySelector("#CBSE-IL");
const dropCBSE_pyq = document.querySelector("#CBSE-PYQ");

var val=document.querySelector(".dropdown1.IL");
var val1=document.querySelector(".dropdown1.PYQ");
var val2=document.querySelector("#dropCBSE-IL");
var val3=document.querySelector("#dropCBSE-PYQ");

icon.addEventListener("click",togle);
searc.addEventListener("click",sear);
dropil.addEventListener("click",drop);
droppyq.addEventListener("click",drop1);
dropCBSE_il.addEventListener("click",dropIL);
dropCBSE_pyq.addEventListener("click",dropCBSE);

function togle(){
    nav.classList.toggle("active");
    icon.classList.toggle("active");
}
function sear(){
    search.classList.toggle("active");
    searc.classList.toggle("active");
}
function drop(){
    // document.querySelector(".dropdown1.IL").style.display="flex";
    if(val.style.display==="none"){
        val.style.display="flex";
        if(val1.style.display==="flex"){
            val1.style.display="none";
        }
    }
    else{
        val.style.display="none";
    }
}
function drop1(){
    // document.querySelector(".dropdown1.IL").style.display="flex";
    if(val1.style.display==="none"){
        val1.style.display="flex";
        if(val.style.display==="flex"){
            val.style.display="none";
        }
    }
    else{
        val1.style.display="none";
    }
}
function dropIL(){
    // document.querySelector(".dropdown1.IL").style.display="flex";
    if(val2.style.display==="none"){
        val2.style.display="flex";
        val.style.display="flex";
        if(val3.style.display==="flex"){
            val3.style.display="none";
        }
    }
    else{
        val2.style.display="none";
    }
}
function dropCBSE(){
    // document.querySelector(".dropdown1.IL").style.display="flex";
    if(val3.style.display==="none"){
        val3.style.display="flex";
        val1.style.display="flex";
        if(val2.style.display==="flex"){
            val2.style.display="none";
        }
    }
    else{
        val3.style.display="none";
    }
}
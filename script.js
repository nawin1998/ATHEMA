// header

hamburger=document.querySelector(".hamburger");
hamburger.onclick=function(){
navBar=document.querySelector(".navLinks");
navBar.classList.toggle("active");
}

// News
const next = document.getElementById("next");
const slider = document.querySelector(".slider");
const imgs = document.querySelectorAll(".slider img");

let index = 0;
let width = imgs[index].clientWidth;

next.addEventListener("click", () =>{
    index++;

    slider.style.transform = `translate(${-index * (width + 10)}px)`
    if (index === imgs.length -1) {
        next.classList.add("disable");
    }else{
        prev.classList.remove("disable");
    }
   
});

// validate-form
const form = document.getElementById("form");
var a=document.getElementById("first");
var b=document.getElementById("f-error");

function validfirst(){
    if(a.value===""){
        b.innerHTML="Enter Your First Name"
        a.style.border="5px solid red"
        return false;
    }
    else if(a.value.length<3 ||a.value.length>15){
        b.innerHTML="character must contain minimum 3 to maximum 15";
        a.style.border="5px solid red";
        return false;
    }
    else{
        b.innerHTML="";
        a.style.border="5px solid green";
        return true;
    }
}
let g=document.getElementById("mobile")
let h=document.getElementById("mo-error")

function validmobile(){
    if(g.value===""){
        h.innerHTML="Enter Your Mobile Number"
        g.style.border="5px solid red"
        return false;
    }
    else if(isNaN(g.value) || g.value.length<10 || g.value.length>10){
        h.innerHTML="Enter a Valid Number";
        g.style.border="5px solid red";
        return false;
    }
    else{
        h.innerHTML="";
        g.style.border="5px solid green";
        return true;
    }
}
let pingm=document.getElementById("gmail");
let f=document.getElementById("gm-error");

function validmail(){
    if(pingm.value===""){
        f.innerHTML="Enter Your gmail"
        pingm.style.border="5px solid red"
        return false;
    }
    else if(!pingm.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        f.innerHTML="Enter Your valid gmail"
        pingm.style.border="5px solid red";
        return false;
    }
    else{
        f.innerHTML="";
        pingm.style.border="5px solid green";
        return true;
    }
}
let pinadd=document.getElementById("message")
let j=document.getElementById("m-error")

function validmess(){
    if(pinadd.value===""){
        j.innerHTML="Enter Your message"
        pinadd.style.border="5px solid red"
        return false;
    }
    else if(!pinadd.value.match(/^[a-z A-Z 0-9 , . /]*$/)){
        j.innerHTML="Enter a valid message";
        pinadd.style.border="5px solid red";
        return false;
    }
    else{
        j.innerHTML="";
        pinadd.style.border="5px solid green";
        return true;
    }
}
form.addEventListener('submit',e=>{
e.preventDefault();
checkinput();
})
function checkinput() {
const firstnamevalue = a.value.trim();
const emailvalue = pingm.value.trim();
const mobilevalue= g.value.trim();
const messagevalue = pinadd.value.trim();

document.write("firstname:"+" "+firstnamevalue+"<br>");
document.write("Email id:"+" " + emailvalue + "<br>");
document.write("Phone Number:"+" " +mobilevalue + "<br>");
document.write("message:"+" " + messagevalue + "<br>");
}
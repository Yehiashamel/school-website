let menuBtn = document.querySelector('.btn');
let navbar = document.querySelector("#ul");
let nav = document.querySelector(".nav");
let icon =document.getElementById("icon")
menuBtn.onclick = function(){
    navbar.classList.toggle("active");
    icon.classList.toggle("fa-xmark")
};
document.body.onscroll = () =>{
    navbar.classList.remove("active");
    icon.classList.remove("fa-xmark");
};
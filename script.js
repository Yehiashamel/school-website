let menuBtn = document.querySelector('.btn');
let navbar = document.querySelector("#ul");
let nav = document.querySelector(".nav");
menuBtn.onclick = function(){
    navbar.classList.toggle("active");
};
document.body.onscroll = () =>{
    navbar.classList.remove("active")
};
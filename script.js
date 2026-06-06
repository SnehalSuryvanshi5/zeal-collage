window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
}
else{
navbar.style.boxShadow = "none";
}

});

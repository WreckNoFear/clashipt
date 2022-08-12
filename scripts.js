const menu = document.querySelector(".menu-items");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navBtn = document.querySelector(".navbar-btn");

menuBtn.addEventListener("click", function() {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
});
cancelBtn.addEventListener("click", function() {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
});
navBtn.addEventListener("click", function() {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
})

window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav')
    let windowPos = window.scrollY > 0;
    nav.classList.toggle('nav-scroll', windowPos);
});

var loadFile = function(event) {
    var output = document.getElementById('imgPre');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = "block";
    output.onload = function() {
      URL.revokeObjectURL(output.src)
    }
};
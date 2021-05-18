const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");
menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active-nav");
  mainContent.classList.toggle("active-main-content");
  document.querySelector(".animated-icon").classList.toggle("open")
});

// When the user scrolls down 20px from the top of the document, show the "move to top" button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(".navbar-toggler").click(function(){
  $(".animated-icon").toggleClass("open");
});

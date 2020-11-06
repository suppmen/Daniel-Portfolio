/********* Smooth scroll arrow section *********/

scroll = document.getElementById("scroll");
window.onscroll = function () {
    scrollDisplay()
    ScrollReveal().reveal('.headline');
   
};




function scrollDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
}

scroll.addEventListener("click", scrollToTop);


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



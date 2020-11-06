// underline on active link
const CvActive = document.querySelector("#myCV");
const BioActive = document.querySelector("#myBIO");
CvActive.addEventListener("click", CvGetUnderLine);
BioActive.addEventListener("click", BioGetUnderLine);
function CvGetUnderLine(){
    CvActive.style.textDecoration = "underline";
    BioActive.style.textDecoration = "none";
}
function BioGetUnderLine(){
    BioActive.style.textDecoration = "underline";
    CvActive.style.textDecoration = "none";
}



// show and hide the BIO and CV
 document.querySelectorAll("nav ul li a").forEach( menu => menu.addEventListener("click", showMenu));

 function showMenu( event ) {
   // Don't follow the link!
   event.preventDefault();

   // remove current active
   document.querySelector("#content .active").classList.remove("active");

   // find href, and set that to active 
   const href = event.target.getAttribute("href"); // NOTE: Use getAttribute rather than .href to avoid getting the FULL URI
   document.querySelector(`#content section${href}`).classList.add("active");
 }



// scroll to top
scroll = document.getElementById("scroll");
window.onscroll = function () {
    scrollDisplay()
};

function scrollDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

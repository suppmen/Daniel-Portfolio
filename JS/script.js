"use strict";

const selector = document.querySelector('.textBox h2')
selector.classList.add(`magictime`,'perspectiveUpReturn')

window.onload = function() {

    setupLax();
  }

function setupLax(){
    lax.setup()
    
    // update every scroll
    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }
    console.log("start")
    window.requestAnimationFrame(updateLax)
    
}
//scroll
window.addEventListener("scroll", theScroll);
function theScroll(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    
}


//toggle menu burger
const headerA = document.querySelectorAll(".menu a")
console.log(headerA);


const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".toggle");
menuToggle.addEventListener("click", toggleBurgerMenu);


headerA.forEach((e)=>{
    // e.classList.add("activLink");
    e.addEventListener("click", toggleBurgerMenu);
});


function toggleBurgerMenu(){
    
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
    
        const clickedLink = this.getAttribute("id");
        console.log(clickedLink);
       

   setAsActiveLink(clickedLink); 
   function setAsActiveLink(id){
    if (id==="one"){
        document.querySelector("#one").classList.add("activLink");
        document.querySelector("#two").classList.remove("activLink");
    document.querySelector("#three").classList.remove("activLink");
    document.querySelector("#four").classList.remove("activLink");
    document.querySelector("#five").classList.remove("activLink");
    document.querySelector("#six").classList.remove("activLink");
    }
    else if(id==="two"){
        document.querySelector("#two").classList.add("activLink");
        document.querySelector("#one").classList.remove("activLink");
    document.querySelector("#three").classList.remove("activLink");
    document.querySelector("#four").classList.remove("activLink");
    document.querySelector("#five").classList.remove("activLink");
    document.querySelector("#six").classList.remove("activLink");
    }
    else if(id==="three"){
        document.querySelector("#three").classList.add("activLink");
        document.querySelector("#two").classList.remove("activLink");
    document.querySelector("#one").classList.remove("activLink");
    document.querySelector("#four").classList.remove("activLink");
    document.querySelector("#five").classList.remove("activLink");
    document.querySelector("#six").classList.remove("activLink");
    }
    else if(id==="four"){
        document.querySelector("#four").classList.add("activLink");
        document.querySelector("#two").classList.remove("activLink");
    document.querySelector("#three").classList.remove("activLink");
    document.querySelector("#one").classList.remove("activLink");
    document.querySelector("#five").classList.remove("activLink");
    document.querySelector("#six").classList.remove("activLink");
    }else if(id==="five"){
        document.querySelector("#five").classList.add("activLink");
        document.querySelector("#two").classList.remove("activLink");
    document.querySelector("#three").classList.remove("activLink");
    document.querySelector("#four").classList.remove("activLink");
    document.querySelector("#one").classList.remove("activLink");
    document.querySelector("#six").classList.remove("activLink");
    }else if(id==="six"){
        document.querySelector("#six").classList.add("activLink");
        document.querySelector("#two").classList.remove("activLink");
    document.querySelector("#three").classList.remove("activLink");
    document.querySelector("#four").classList.remove("activLink");
    document.querySelector("#five").classList.remove("activLink");
    document.querySelector("#one").classList.remove("activLink");
    
}
   }

}


  

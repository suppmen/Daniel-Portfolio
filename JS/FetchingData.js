/***** Get Data from WP *****/


const link1 = "https://mymmd.dk/Daniel-Portfolio/wp-json/wp/v2/portfolio?per_page=100&_embed?&order=asc";
window.addEventListener("DOMContentLoaded", getData);

const link3 = "https://mymmd.dk/Daniel-Portfolio/wp-json/wp/v2/skill?per_page=100&_embed?_asc"




/***** fetch Data *****/

function getData() {

    const urlParams = new URLSearchParams(window.location.search);
    const the_work_id = urlParams.get('work_id');
    const link2 = "https://mymmd.dk/Daniel-Portfolio/wp-json/wp/v2/portfolio/" + the_work_id + "?per_page=100&_embed";



    if (the_work_id) {
        fetch(link2)
            .then(function (response) {
                return response.json()
            })
            .then(showSingleArtPage)
    } else {
        fetch(link1)
            .then(function (response) {
                return response.json();
            })
            .then(showData);

            fetch(link3)
            .then(function (response) {
                return response.json();
            })
            .then(showSkillsData);
    }
}

function showSkillsData(skillsArray){
  skillsArray.forEach(skill =>{

    renderSkillsPage(skill);
    console.log(skill,"testme")
  });
}


function showData(WorksArray) {

    WorksArray.forEach(work => {


        renderWorkPage(work);
       
       
    });
    //setupLax();
   /* document.querySelector(".work").classList.add("lax");
    document.querySelector(".work").dataset.laxTranslateX="(vh*0.3) 0, 1000 -1000";
    document.querySelector(".work").dataset.dataLaxAnchor="self"
    lax.addElement(document.querySelector(".work"))

*/
lax.updateElements()
}


// modal
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

function renderSkillsPage(skillsPage){

    const template2 = document.querySelector("#mySkills").content;

    const copy = template2.cloneNode(true);

    copy.querySelector("img").onload= function () {
        lax.updateElements();
     }
    copy.querySelector("img").src = skillsPage.skill_image.guid;
    copy.querySelector("h2").textContent = skillsPage.skill_name;
    copy.querySelector("p").textContent = skillsPage.long_des;
    
/***** Modal *****/
copy.querySelector(".btn").addEventListener("click", showModal);

function showModal() {
    
    modal.querySelector(".modal-name").textContent = skillsPage.skill_name;
    modal.querySelector(".modal-description").textContent = skillsPage.modal_desc;
    modal.querySelector(".modal-image").style.backgroundImage = 
    `url(${skillsPage.modal_image.guid})`;
    
   

    modal.classList.remove("hide");
}
    



    document.querySelector(".skills .content").appendChild(copy);



}



function renderWorkPage(worksPageArray) {

    const template = document.querySelector("#myWorks").content;

    const copy = template.cloneNode(true);

    copy.querySelector("img").onload= function () {
        lax.updateElements();
     }
    copy.querySelector("img").src = worksPageArray.project_image.guid;
    
    copy.querySelector(".info").textContent = worksPageArray.title.rendered;
    const a = copy.querySelector('a');


    if (a) {
        a.href += worksPageArray.id;

    }

    



    document.querySelector(".work .content").appendChild(copy);



}




function showSingleArtPage(art) {


    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    const divArtDescription = copy.querySelector('#art-description');

    copy.querySelector('h2').textContent = art.title.rendered;
    copy.querySelector('.heading p').textContent = art.intro;
    copy.querySelector("img.intro-image").src = art.intro_image.guid;
    copy.querySelector("img.project-image").src = art.project_image.guid;
    copy.querySelector(".workBox h2").textContent = art.intro_long_des;
    copy.querySelector(".workBox p").textContent = art.long_desc;
   
    
    copy.querySelector("a").href = art.link_to_works;

    document.querySelector("#single-work").appendChild(copy);
    
      
    }

    
      


    
    






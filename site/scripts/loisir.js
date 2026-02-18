/* projets.js
* Auteur : Martin Calamel
* Script de la page projets.html
* Fonctions à réaliser: 
*       * récupérer les données du json.
*       * Mettre à jour l'ensemble des templates
* Fonction importées :
*      * from main.js => get_data_from_localStorage, set_up_localStorage
*/

// import {set_up_localStorage} from "./main.js";


import {set_up_localStorage} from "./main.js";

function update_template_loisir() {
    /* # update_template_education
    * ## Objectif : mettre à jour les template loisir
    *   pour les cartes de présentation et les descriptions cachés
    * ## Input :
    * None
    * ## Output :
    * None
    */

    let data = JSON.parse(localStorage.getItem("Hobby"));
    let template_activite = document.querySelector("#tpl-activite");
    let template_texte = document.querySelector("#tpl-section");

    const grid = document.getElementById("grille-loisir");
    const contenu = document.getElementById("loisir-contenu");

    data.forEach((proj, index) => {

        const key = "loisir-" + index;

        let clone_activite = document.importNode(template_activite.content, true);
        let card = clone_activite.querySelector(".activite");

        card.dataset.key = key;

        let img = card.querySelector("img");

        img.dataset.sketch = "../images/loisir/" + proj.Image_sketch;
        img.dataset.full = "../images/loisir/" + proj.Image;

        img.src = img.dataset.sketch;
        img.alt = proj.Nom;

        grid.appendChild(clone_activite);

        let clone_texte = document.importNode(template_texte.content, true);
        let section = clone_texte.querySelector(".hidden-section");

        section.dataset.key = key;

        section.querySelector("h2").textContent = proj.Nom;
        section.querySelector("p").innerHTML = proj.Text;

        contenu.appendChild(clone_texte);
    });
}


async function load_page() {

    /* # load_page
    * ## Objectif : routine à executer lors du chargement de la page
    * ## Input :
    * None
    * ## Output :
    * None
    */
   
    await set_up_localStorage();
    update_template_loisir();
    let cursorCircle = document.querySelector(".cursor-circle");
    cursorCircle.style.background = "#a2a2a2";
    // cursorCircle.style.border = "solid black 8px";
}

load_page();

document.addEventListener("click", (e) => {

  const card = e.target.closest(".activite");
  if (!card) return;

  const key = card.dataset.key;

  document.querySelectorAll(".hidden-section")
    .forEach(sec => sec.classList.remove("is-active"));

  document.querySelectorAll(".activite img")
    .forEach(img => {
      img.src = img.dataset.sketch;
    });

  const targetSection = document.querySelector(
    `.hidden-section[data-key="${key}"]`
  );

  if (targetSection) {
    targetSection.classList.add("is-active");

    setTimeout(() => {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 200);
  }

  const activeImg = card.querySelector("img");
  activeImg.src = activeImg.dataset.full;

});


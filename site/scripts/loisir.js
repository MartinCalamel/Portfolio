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


const JSON_FILE_NAME = "Data_education.json";
const TAB_DATA_NAME = ["Education", "Diplômes", "Projets_perso", "Projets_ecole", "Hobby"];

function update_template_loisir() {

    let data = JSON.parse(localStorage.getItem("Hobby"));
    let template_activite = document.querySelector("#tpl-activite");
    let template_texte = document.querySelector("#tpl-section");

    const grid = document.getElementById("grille-loisir");
    const contenu = document.getElementById("loisir-contenu");

    data.forEach((proj, index) => {

        const key = "loisir-" + index;

        /* ===== CARTE ===== */
        let clone_activite = document.importNode(template_activite.content, true);
        let card = clone_activite.querySelector(".activite");

        card.dataset.key = key;

        let img = card.querySelector("img");
        img.src = "../images/loisir/" + proj.Image;
        img.alt = proj.Nom;

        grid.appendChild(clone_activite);

        /* ===== SECTION ===== */
        let clone_texte = document.importNode(template_texte.content, true);
        let section = clone_texte.querySelector(".hidden-section");

        section.dataset.key = key;

        section.querySelector("h2").textContent = proj.Nom;
        section.querySelector("p").textContent = proj.Text;

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
}

async function set_up_localStorage() {

    /* # set_up_localStorage
    * ## Objectif : remplir le localStorage avec les
    *       différentes variables si elle ne sont
    *       pas déjà présente dans les keys.
    * ## Input :
    * None
    * ## Output :
    * None
    */

    for (const data_name of TAB_DATA_NAME){
        let data = localStorage.getItem(data_name);
        if (!data){
            console.log("[INFO] no data for " + data_name);
            console.log("[INFO] Getting data...");
            await get_data_from_json(data_name, JSON_FILE_NAME);
            console.log("[INFO] Data OK");
        }
    }
}

load_page();

document.addEventListener("click", (e) => {

  const card = e.target.closest(".activite");
  if (!card) return;

  const key = card.dataset.key;

  const sections = document.querySelectorAll(".hidden-section");

  sections.forEach(sec => {
    sec.classList.remove("is-active");
  });

  const target = document.querySelector(
    `.hidden-section[data-key="${key}"]`
  );

  if (target) {
    target.classList.add("is-active");
  }

});


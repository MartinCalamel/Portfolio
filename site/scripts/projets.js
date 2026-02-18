/* projets.js
* Auteur : Martin Calamel
* Script de la page projets.html
* Fonctions à réaliser: 
*       * récupérer les données du json.
*       * Mettre à jour l'ensemble des templates
* Fonction importées :
*      * from main.js => get_data_from_localStorage, set_up_localStorage
*/

import {get_data_from_localStorage, set_up_localStorage} from "./main.js";

function update_template_projet(type) {

    /* # update_template_education
    * ## Objectif : mettre à jour le template éducation
    *       avec le style gauche puis droite.
    * ## Input :
    * None
    * ## Output :
    * None
    */

    let data = get_data_from_localStorage("Projets_" + type);
    let template_right = document.querySelector("#projet-" + type + "-template-1");
    let template_left = document.querySelector("#projet-" + type + "-template-2");
    let compteur = 0;
    
    for (const proj of data){

        // choix du clone (droite ou gauche)
        let clone;
        if (compteur%2 == 0){
            clone = document.importNode(template_left.content, true);
        } else {
            clone = document.importNode(template_right.content, true);
        }

        // en fonction des templates on a une alternance premier enfant, deuxième enfant
        let newcontent = clone.firstElementChild.innerHTML 
            .replace(/{{Lien}}/g,  proj.Lien)
            .replace(/{{Titre}}/g, proj.Nom)
            .replace(/{{Image}}/g, proj.Image)
            .replace(/{{Texte}}/g, proj.Texte);
        
             // = proj.Image;
        clone.firstElementChild.innerHTML = newcontent;
        document.getElementById("projet-" + type).appendChild(clone);
        document.getElementById("projet-" + type).lastElementChild.getElementsByClassName("div-image-projet")[0].firstElementChild.lastElementChild.id = proj.Image;

        compteur ++;
    }
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
    update_template_projet("perso");
    update_template_projet("ecole");

    let cursorCircle = document.querySelector(".cursor-circle");
    cursorCircle.style.background = "#bf9d5e";
}

load_page();
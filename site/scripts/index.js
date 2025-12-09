/* index.js
* Auteur : Martin Calamel
* Script de la page index.html
* Fonctions à réaliser: 
*       * récupérer les données du json.
*       * Mettre à jour l'ensemble des templates
* Fonction importées :
*      * from main.js => get_data_from_localStorage, set_up_localStorage()
*/

import {get_data_from_localStorage, set_up_localStorage} from "./main.js";

function update_template_education() {

    /* # update_template_education
    * ## Objectif : mettre à jour le template éducation
    *       avec le style gauche puis droite.
    * ## Input :
    * None
    * ## Output :
    * None
    */

    let data = get_data_from_localStorage("Education");
    let template_right = document.querySelector("#etud-right-template");
    let template_left = document.querySelector("#etud-left-template");
    let compteur = 0;
    
    for (const edu of data){

        // choix du clone (droite ou gauche)
        let clone;
        if (compteur%2 == 0){
            clone = document.importNode(template_left.content, true);
        } else {
            clone = document.importNode(template_right.content, true);
        }

        // en fonction des templates on a une alternance premier enfant, deuxième enfant
        let newcontent = clone.children[compteur%2].innerHTML 
            .replace(/{{dates}}/g, edu.dates)
            .replace(/{{ecole}}/g, edu.ecole)
            .replace(/{{texte}}/g, edu.texte);
        
        clone.children[compteur%2].innerHTML = newcontent;
        document.getElementById("education").appendChild(clone);

        compteur ++;
    }
}

function update_template_diplome() {

    /* # update_template_diplome
    * ## Objectif : mettre à jour le template diplôme
    * ## Input :
    * None
    * ## Output :
    * None
    */

    let data = get_data_from_localStorage("Diplômes");
    let template = document.querySelector("#diplome-template");

    for (const diplome of data){
        let clone = document.importNode(template.content, true);

        let newcontent = clone.firstElementChild.innerHTML 
            .replace(/{{Nom}}/g, diplome.Nom)
            .replace(/{{Mention}}/g, diplome.Mention)
            .replace(/{{Année}}/g, diplome.Année);
        
        clone.firstElementChild.innerHTML = newcontent;
        document.getElementById("diplomes").appendChild(clone);
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
    update_template_education();
    update_template_diplome();
    
}

load_page();


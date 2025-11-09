/* index.js
* Auteur : Martin Calamel
* Script de la page index.html
* Fonctions à réaliser: 
*       * récupérer les données du json.
*       * Mettre à jour l'ensemble des templates
* Fonction importées :
*      * from main.js => get_data_from_json, get_data_from_localStorage, set_up_localStorage()
*/

import {get_data_from_localStorage} from "./main.js";

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
        compteur ++;
        console.log(clone.getElementById("child").innerHTML)
        let newcontent = clone.getElementById("child").innerHTML
            .replace(/{{dates}}/g, edu.dates)
            .replace(/{{ecole}}/g, edu.ecole)
            .replace(/{{texte}}/g, edu.texte);
        
        clone.getElementById("child").innerHTML = newcontent;
        document.getElementById("education").appendChild(clone);
    }
}


update_template_education();
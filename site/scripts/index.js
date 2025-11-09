/* index.js
* Auteur : Martin Calamel
* Script de la page index.html
* Fonctions à réaliser: 
*       * récupérer les données du json.
*       * Mettre à jour l'ensemble des templates
* Fonction importées :
*      * from main.js => get_data_from_json, get_data_from_localStorage, set_up_localStorage()
*/

import {get_data_from_localStorage} from './main.js'

function update_template_education() {

    /* # update_template_education
    * ## Objectif : mettre à jour le template éducation
    *       avec le style gauche puis droite.
    * ## Input :
    * None
    * ## Output :
    * None
    */

    let data = get_data_from_localStorage("education");

}
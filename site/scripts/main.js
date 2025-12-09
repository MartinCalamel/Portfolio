/* main.js
* auteur : Martin Calamel
* objectif : déclaration des fonction de base.
*/

// Définition des constantes
const JSON_FILE_NAME = "Data_education.json";
const TAB_DATA_NAME = ["Education", "Diplômes"];

async function get_data_from_json(data_name, file_name) {
    
    /* # get_data_from_json
    * ## Objectif : Récupérer le contenu d'un fichier json
    * afin de le stocker dans le localStorage
    * ## Input : 
    * data_name => nom du dictionnaire associer à la data
    * file_name => nom du fichier json (Sans le path (../scripts/Data/))
    * ## Output : 
    * None
    */

    let result = await fetch("../scripts/Data/" + file_name);
    let data = await result.json();
    data = data[data_name];
    localStorage.setItem(data_name, JSON.stringify(data));
}

export function get_data_from_localStorage(data_name) {
    
    /* # get_data_from_localStorage
    * ## Objectif : Récupérer une certaine variable du localStorage.
    * ## Input : 
    * data_name => nom de la variable à récupérer.
    * ## Output : 
    * Data
    */
    
    return JSON.parse(localStorage.getItem(data_name));
}

export async function set_up_localStorage() {

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

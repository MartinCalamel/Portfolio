let photo = document.getElementById("image");

// met à jour la couleur du masque qui suit le curseur pour la couleur de la page.
let cursorCircle = document.querySelector(".cursor-circle");
cursorCircle.style.background = "#ebab34";

function over(){
    /* # over
    * ## Objectif : changer la photo de profile en dessin par la vrai
    *               lors du passage de la souris
    * ## Input :
    * None
    * ## Output :
    * None
    */

    photo.src = "../images/Contact/profile.jpg";
}

function off() {
    /* # off
    * ## Objectif : changer la vrai photo de profile par la photo en dessin
    *               lorsque la souris sort de l'image.
    * ## Input :
    * None
    * ## Output :
    * None
    */

    photo.src = "../images/Contact/profile_sketch.jpg";
    }   

function over_color(id){
    /* # over_color
    * ## Objectif : changer la photo en noir et blanc par la
    *               photo en couleur lors du passage de la souris
    * ## Input :
    * id : string => id de la photo à changer
    * ## Output :
    * None
    */

    let image = document.getElementById(id);
    image.src = "../images/Contact/color_"+id;
}

function off_color(id){
    /* # off_color
    * ## Objectif : changer la photo en couleur par la
    *               photo en noir et blanc lorsque la souris sort de l'image
    * ## Input :
    * id : string => id de la photo à changer
    * ## Output :
    * None
    */

    let image = document.getElementById(id);
    image.src = "../images/Contact/"+id;
}
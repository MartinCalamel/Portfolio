function over(id){
    /* # over
    * ## Objectif : changer la photo en noir et blanc par la
    *               photo en couleur lors du passage de la souris
    * ## Input :
    * id : string => id de la photo à changer
    * ## Output :
    * None
    */

    let image = document.getElementById(id);
    image.src = "../images/projet/color_"+id;
}

function off(id){
    /* # off
    * ## Objectif : changer la photo en couleur par la
    *               photo en noir et blanc lorsque la souris sort de l'image
    * ## Input :
    * id : string => id de la photo à changer
    * ## Output :
    * None
    */

    let image = document.getElementById(id);
    image.src = "../images/projet/"+id;
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        initAnimations();
    }, 500);
});

function initAnimations() {
    /* # initAnimations
    * ## Objectif : animer les projet pour qu'ils rentres
    *               sur la page en glissant d'un coté lors du scroll
    * ## Input :
    * id : string => id de la photo à changer
    * ## Output :
    * None
    */

    const elements = document.querySelectorAll('.div-projet');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animate', entry.isIntersecting);
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
}



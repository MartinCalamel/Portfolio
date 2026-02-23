
document.addEventListener("DOMContentLoaded", () => {
  /*
  Ajout du header de façon dynamique
  Objectif  => réduire la redondance de code
            => Faciliter la mise à jour des liens du menu
  */
  const headerHTML = `
    <h1>Martin Calamel</h1>
    <ul>
        <a href="/html/index.html"><li id="edu">Education</li></a>
        <a href="/html/projet.html"><li id="proj">Projets</li></a>
        <a href="/html/loisir.html"><li id="lois">A propos</li></a>
        <a href="/html/contact.html"><li id="contact">Contact</li></a>
    </ul>
  `;
  const titreHTML = `
    <h1>
        Bienvenue sur mon Portfolio
    </h1>
  `;

  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("titre").innerHTML = titreHTML;
  
  // gestion du mouvement du masque
  
  let cursorCircle = document.querySelector(".cursor-circle");

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursorCircle.style.left = `${mouseX}px`;
    cursorCircle.style.top = `${mouseY}px`;
  });
});

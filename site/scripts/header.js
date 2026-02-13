document.addEventListener("DOMContentLoaded", () => {
  /*
  Ajout du header de façon dynamique
  Objectif  => réduire la redondance de code
            => Faciliter la mise à jour des liens du menu
  */
  const headerHTML = `
    <h1>Martin Calamel</h1>
    <ul>
        <a href="/html/index.html"><li>Education</li></a>
        <a href="/html/projet.html"><li>Projets</li></a>
        <a href="/html/loisir.html"><li>A propos</li></a>
        <a href="/html/contact.html"><li>Contact</li></a>
    </ul>
  `;
  const titreHTML = `
    <h1>
        Bienvenue sur mon Portfolio
    </h1>
  `;

  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("titre").innerHTML = titreHTML;
});
document.addEventListener("DOMContentLoaded", () => {
  /*
  Ajout du header de façon dynamique
  Objectif  => réduire la redondance de code
            => Faciliter la mise à jour des liens du menu
  */
  const headerHTML = `
    <h1>Martin Calamel</h1>
    <ul>
        <li><a href="index.html">Education</a></li>
        <li><a href="projet.html">Projet</a></li>
        <li>A propos</li>
        <li><a href="contact.html">Contact</a></li>
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
document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
    <h1>Martin Calamel</h1>
    <ul>
        <li><a href="index.html">Education</a></li>
        <li><a href="projet.html">Projet</a></li>
        <li>A propos</li>
        <li>Contact</li>
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
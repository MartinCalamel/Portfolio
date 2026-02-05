[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/kntKIZwA)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16464773&assignment_repo_type=AssignmentRepo)

# Auteurs
* [Ethan LY-MICHAUX](https://github.com/CPEthan)  
* [Martin CALAMEL](https://github.com/MartinCalamel)

# Projet
le projet était de faire le site d'une agence de voyage de luxe.  
les premières version devait ressemler à [ça](/S1.pdf)

# API

Pour profiter de toute les fonctionnalités du site internet il faut ajouter votre propre **API** de [*openweathermap*](https://home.openweathermap.org/)  
## Ajout de la clef
Pour ajouter votre clef **API** il fait créer un fichier *API.json* dans le dossier *js*:  
### En ligne de commande :
```
# se placer dans le repertoire du site (même niveau que README.md)

echo {"api":"VOTRE_CLEF_API"} >js/API.json
```
### A la main :
* Se placer dans le dossier **js**  
* Créer un fichier **API.json**
* Entrer la ligne suivante : `{"api":"VOTRE_CLEF_API"}`
* Sauvegarder le fichier

# Repartition du travail
Au sein de notre groupe nous nous somme repartie le travail selon nos preferences et competences respectives.  
Ainsi notre évaluation de la repartition du travail se doit d'être plus détaillée qu'un simple pourcentage.
### html
* Ethan Ly--Michaux : **50 %**
* Martin Calamel :    **50 %**

### css
* Ethan Ly--Michaux : **70 %**
* Martin Calamel :    **30 %**

### javascript
* Ethan Ly--Michaux : **30 %**
* Martin Calamel :    **70 %**

# Navigation
Petit guide de navigation au sein de notre site d'agence de voyage Dream & Live.  
### Nav barre
Depuis la barre de navigation il y a beaucoup de possibilité:  
* Accueil : vous fait revenir sur l'index
* Panier : Vous permet d'accéder au Panier
* A propos : vous permet d'en savoir plus sur notre équipe
* l'image de l'avion: vous permet d'aller sur la page de recherche avancée

### Footer
Depuis le footer : 
* le numéro de téléphone vous redirige vers une application dédier au appels téléphonique.
* le mail vous redirige vers votre service de messagerie avec préremplit:
    * le destinataire (Nous)
    * l'objet
    * le début du mail

### Les images
La plus-part des images sont cliquable et vous ferons voyager au travers des destinations.
# Bugs connu
Voici une liste des fonctionnalité que nous n'avons pas réussi à corriger convenablement et qui présente encore une possibilité d'amelioration 
### Barre de recherche
* la barre de recherche dans la barre de navigation n'est pas fonctionnel elle ne redirige vers rien.
* la barre de recherche dans la page recherche n'est pas fonctionnel et n'influe pas dans les filtres.
### Animation
* L'animation des images dans les pages de destination a un retard pour les trois premiers transitions du carousel.

# TODO
- [ ] gestion de compte
- [ ] Correction des Bugs
- [ ] ajout de destination
- [ ] plus d'options de filtre
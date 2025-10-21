# Portfolio
Ce dépôt contient le code source de mon portfolio web, ainsi que toute la démarche technique liée à sa mise en ligne :  
*configuration serveur, intégration continue, pipeline CI/CD et déploiement.*  
L’objectif est de présenter mes compétences et mes projets tout en documentant la chaîne complète de développement et d’hébergement du site.
## Sommaire
* [Hérbergement](#Hébergement)
  * Choix de l'hébergeur
  * Configuration du serveur
* [Workflow](#Workflow)
  * Gestion des secrets
  * Mettre en place le workflow
  * Automatisation des tests
  * Automatisation du déploiment
## Hébergement
Pour l'hébergement, j'ai choisi de ne pas utiliser `github site` afin de pouvoir apprendre la gestion d'un serveur.  
Pour cela il a fallu trouver un hébergeur.
### Choix de l'hébergeur
J'ai choisi de travailler avec des instances `oracl cloud`.  
En effet ces instances présentent plusieurs points positifs : 
* Dans un premier temps, celles-ci allaient me permettre de réaliser ce que je voulais.
* Ensuite, la gratuité de l'offre *Always free* rend cette solution idéale.
---
L'instance avec laquelle j'ai choisi de travailler possède la configuration suivante :

| Nom | valeur |
| --- | --- |
| Shape | VM.Standard.E2.1.Micro |
| OCPU count | 1 |
| Network bandwidth (Gbps) | 0.5 |
| Memory (GB) | 1 |
| Storage (GB) | 47 |
| OS | Ubuntu 22.04.5 LTS |

### Configuration du serveur
Par la suite il a fallu configurer l'instance pour qu'elle puisse héberger un site web.
Pour le web serveur j'ai choisi `Ngnix` simple à configurer et à déployer.  

**Installation du service**
```console
sudo apt update
sudo apt install nginx
```
Ou en une ligne
```console
sudo apt update && sudo apt install nginx -y
```

# Workflow


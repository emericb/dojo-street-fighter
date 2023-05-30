# Dojo Street Fighter

## Welcome to the Dojo!

Salutations combattants! Dans quelques temps prendra place le plus grand tournoi d'arts martiaux jamais réalisé, des combattants de tout horizons et de toutes licen.... hum de tous les pays se réuniront pour s'affronter et déterminer qui est le plus fort d'entre eux.

## The challenge !

Pour ce faire nous comptons sur votre connaissance des arts martiaux et de la programmation pour nous aider à créer l'application qui nous permettra de suivre les combats en direct!

## Chantier

Vous trouverez actuellement sur ce chantier une page d'accueil tout droit sortie de l'application ainsi qu'un model comprenant une classe de combattant.

## Steps

### Première étape

Pour le bon déroulement du tournoi, nous avons besoin d'afficher un accueil pour les combattants et spectateurs prenant part à l'événement. Pour ce faire, nous avons besoin d'une page d'accueil qui affichera les informations suivantes :

- Le nom du tournoi
- Un accès au combat sur le point de débuter

### Deuxième étape

Nous avons besoin d'une page de combat qui affichera les informations suivantes :

- Le nom des combattants
- Leur vie respective
- leur image afin de les représenter
- Un bouton pour attaquer et lancer la première salve de combat

### Troisième étape

Lorsque le combat est lancé (au clic sur le bouton d'attaque), le personage attaquant lance la méthode attaque:

- qui prend en compte son attaque et effectue un random entre 0,5 et 1,5 \* le nombre d'attaque du personnage.
- Une fois l'attaque paramètrée, il faudra également prendre en compte la défense du personnage visé. récupère la défense du personnage visé, divise là par 100 et la multiplie par l'attaque du personnage attaquant.
- Cette valeur est ensuite soustraite à la vie du personnage attaqué. Le personnage attaqué lance ensuite automatiquement la même méthode attaque. Tu peux répéter le clic d'attaque pour lancer une nouvelle salve de combat et ce jusqu'à ce qu'un de sparticipants n'est plus de PV (ici on accueille que les plus grand champions, l'abandon n'est pas une option!).

### Quatrième étape

Lorsqu'un personnage n'a plus de vie, le combat est terminé et un message de victoire est affiché pour le personnage restant. Un bouton de retour à l'accueil est également affiché.

### Bonus :

Lorsqu'un combat se termine, je store le résultat du combat dans un tableau de ranking. Ce tableau est affiché sur la page d'accueil. Afin de conserver les informations des combats précédents, je stocke les informations dans le local storage.

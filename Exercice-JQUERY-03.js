/* 
Projet n°3
Pour les besoins d'un petit jeu ludique, créez 3 div de couleurs différentes : rouge, vert et jaune.
Ecrivez une fonction permettant à l'utilisateur d'identifier la case jaune.

Indice :
- Vous pouvez créer 1 seule fonction.
- Utilisez un événement de la souris (et informez l'utilisateur de son succès).
*/

function gagne (){
    alert("Gagné !");
}

$("#jaune").hover(gagne);
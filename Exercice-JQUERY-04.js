/* 
Projet n°4:
-----------
Implémentation du fameux jeu du "Morpion"
1. Créez le cadre HTML du jeu (format table).
Ecrivez un programme permettant à 2 utilisateurs de jouer ensemble et permettant ainsi de les identifier.

Indice :
Vous devrez créer 2 fonctions et 2 événements respectivement.
*/

$(document).ready(function(){

    var joueurencours = "X";

    function changetour(){
        $("#tour-joueur").toggleClass("rouge", "bleu");
        $(this).html(joueurencours);
        if(joueurencours == "X"){
            joueurencours = "O";
        }
        else{
            joueurencours = "X";
        }
    }

    $("button").click(changetour);

});
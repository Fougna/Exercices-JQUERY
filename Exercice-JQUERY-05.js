/* Exercice n°5 (conçu par Laurence Doe).
Implémenter un bouton et un élément HTML dont le comportemement rappellera un vrai gyrophare.

Indice :
- Vous devrez créer 2 fonctions (la 1ère contient une condition et la seconde utilisera un setInterval).
- Pas besoin d'image mais juste un effet sur une balise classique. */

$(document).ready(function(){

    function on(){
        $(".gyrobleu").toggleClass("gyrorouge", "gyrobleu");
        setTimeout(on, 300);
    };

    $("#gyro-btn").click(on);

});
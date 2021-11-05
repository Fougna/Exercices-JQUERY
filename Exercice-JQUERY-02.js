/* Exercice jQuery n°2 (Conçu par Laurence Doe)

Ecrivez un programme pour ouvrir et fermer un cadenas.
Vous vous servirez des images suivantes :
1. Cadenas fermé
https://cdn-icons-png.flaticon.com/512/841/841097.png
2. Cadenas ouvert
https://cdn-icons-png.flaticon.com/512/880/880779.png

Indice :
Vous devrez écrire 2 fonctions et utiliser 2 évènements.
*/

$(document).ready(function(){

    function open(){
        $("#cadenas").attr("src", "https://cdn-icons-png.flaticon.com/512/880/880779.png")
    };

    function close(){
        $("#cadenas").attr("src", "https://cdn-icons-png.flaticon.com/512/841/841097.png")
    }

    $("#btn-open").click(open);
    $("#btn-close").click(close);

});
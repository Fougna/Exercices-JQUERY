/* 
  Exercice n°7 (Conçu par Laurence Doe)

  Créez un programme permettant de tirer avec une arme à feu sur 2 zombies.
  Vous utiliserez les ressources suivantes :
  1. Image (Pistolet)
  https://cdn-icons-png.flaticon.com/512/3627/3627634.png
  2. Image (Balle de pistolet)
  https://cdn-icons-png.flaticon.com/512/473/473433.png

  Indices:
  - Vous devrez créer 2 fonctions (l'une contenant des conditions).
  - Vous utiliserez un événement du clavier.
  - Vous pourrez vous baser sur le projet de l'avion animé que nous avons fait en cours avec notamment :
    * l'utilisation de event (e) et which
    * la sélection du document $(document) etc...
    
  N'hésitez pas à me contacter si vous avez des questions.
*/

$(document).ready(function(){

   $("#bullet").hide();
   $("#pistol").css("position", "relative");

    function fire(){
        var balle = $("#bullet");
        var touche = event.which;
        balle.css("position", "relative")
        if (touche == 32){
            balle.animate({
                left : "600px",
            });
            balle.show();
            $("p").text("PAN !");
        }
    };

    $(document).keydown(fire);

});
/*Exercice n°6 (Conçu par Laurence Doe)
Créez un programme permettant d'afficher un avion dans le ciel (animation).
Vous utiliserez les ressources suivantes :
1. Image (à transposer sur l'arrière-plan)
https://cdn-icons-png.flaticon.com/512/1058/1058318.png
2. Gif (pour l'arrière-plan de votre page)
https://media2.giphy.com/media/4N1FZFE5AGO3qrUGkw/giphy.gif?cid=790b76111b79298379b682ed11ce96fbab9baf0149f49045&rid=giphy.gif&ct=g

Indice:
- Vous pouvez créer 1 seule fonction.
- Utilisez un événement du CLAVIER.
Pour vous aider à implémenter votre évenement clavier, voici le lien d'un site
https://keycode.info/
*/

$(document).ready(function(){

    function deplacer(event){
        var touche = event.which;
        var image = $("img");
        image.css('position', 'absolute');
        if (touche == 37){
            image.css('left', '-=5px');
        }else if (touche == 38){
            image.css('top', '-=5px');
        }else if (touche == 39){
            image.css('left', '+=5px');
        }else if (touche == 40){
            image.css('top', '+=5px');
        }
    };

    $(document).keydown(deplacer);
})

/* 
Exercice n°8 (Conçu par Laurence Doe)

Créez un programme pour implémenter une calculatrice qui permettra d'effectuer les opérations suivantes :
- Addition
- Soustraction
- Multiplication
- Division
- Pourcentage

Il faudra également ajouter les touches suivantes :
- AC (pour effacer la saisie du champ input)
- +/- (pour changer l'opérateur d'un chiffre en cours de saisie)
- , ou . (pour les chiffres à virgule)
- = (pour l'affichage du résultat des différentes opérations)

Vous disposez des ressources suivantes :
- une image d'arrière-plan dans le dossier image "img" (usage facultatif)
- un visuel pour vous inspirer sur la disposition des touches
- installation de Bootstrap déjà effectuée pour un meilleur résultat final.
*/

$(document).ready(function(){

    function boutonclic (){

        $("#zero").click(function(){
            $("#ecran").val("0");
        });
        $("#un").click(function(){
            $("#ecran").val("1");
        });
        $("#deux").click(function(){
            $("#ecran").val("2");
        });
        $("#trois").click(function(){
            $("#ecran").val("3");
        });
        $("#quatre").click(function(){
            $("#ecran").val("4");
        });
        $("#cinq").click(function(){
            $("#ecran").val("5");
        });
        $("#six").click(function(){
            $("#ecran").val("6");
        });
        $("#sept").click(function(){
            $("#ecran").val("7");
        });
        $("#huit").click(function(){
            $("#ecran").val("8");
        });
        $("#neuf").click(function(){
            $("#ecran").val("9");
        });
        $("#decimal").click(function(){
            $("#ecran").val(".");
        });
        $("#division").click(function(){
            $("#ecran").val("/");
        });
        $("#multiplication").click(function(){
            $("#ecran").val("*");
        });
        $("#soustraction").click(function(){
            $("#ecran").val("-");
        });
        $("#addition").click(function(){
            $("#ecran").val("+");
        });
        $("#pourcentage").click(function(){
            $("#ecran").val("%");
        });
        $("#clear").click(function(){
            $("#ecran").val("");
        });

    };

    $(document).click(boutonclic);

});
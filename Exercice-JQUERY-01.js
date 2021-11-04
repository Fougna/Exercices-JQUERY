/* Exercice jQuery n°1 (Conçu par Laurence Doe)

1. Écrire la fonction qui va calculer les 20% de réduction (attacher cette fonction avec le clic du bouton)
2. Afficher le montant obtenu après la réduction
3. Lorsque le résultat est inférieur ou égal à 50, afficher le résultat en "vert"
4. Lorsque le résultat est supérieur à 50, afficher le résultat en "rouge"
*/

$(document).ready(function(){

    function calculreduc(){
        var input = $("#montant");
        var contenu = input.val();
        var resultat = contenu * 0.8;
        var resultdiv = $("#resultat-conteneur");
        resultdiv.html(resultat);
        if(resultat>50){
            resultdiv.css("color", "red");
            }
            else{
                resultdiv.css("color", "green");
                }
    };

    var button = $("#bouton-calcul");

    button.click(calculreduc);

});
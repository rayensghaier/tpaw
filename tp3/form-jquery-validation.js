$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    // Y mettre le code jQuery pour valider tous les champs du formulaire

    $("#submit").on("click", function (event) {
        $('#myModal').modal("show");
        event.preventDefault();
        console.log("click");
        let nom = $("#nom").val();

        let prenom = $("#prenom").val();


        let adresse = $("#adresse").val();

        let mail = $("#mail").val()

        if (nom.length == 0) {
            $(".modal-title").text(" Attention : erreur de saisie ");
            $(".modal-body").html("Le champs nom est vide. Veuillez le remplir");
        }
        else
            if (nom.length < 5) {
                $("#erroritem").text("le nom doit contenir 5 carectere  ");
                
            }
            else
                if (prenom.length == 0) {
                   
                    $(".modal-title").text(" Attention : erreur de saisie ");
                    $(".modal-body").html("Le champs prenom est vide. Veuillez le remplir svp");
                }
                else
                    if (prenom.length < 5) {
                        $("#erroritem").text("le prenom doit contenir 5 carectere  ");

                    }
                    else
                        if (adresse.length == 0) {
                            $(".modal-title").text(" Attention : erreur de saisie ");
                            $(".modal-body").html("Le champs adresse est vide. Veuillez le remplir svp");
                        }
                        else
                            if (adresse.length < 5) {
                                $("#erroritem").text("le champ adresse doit contenir 5 carectere  ");
                            }
                            else
                                if (mail.length == 0) {
                                    $(".modal-title").text(" Attention : erreur de saisie ");
                                    $(".modal-body").html("Le champs mail est vide. Veuillez le remplir svp");
                                }
                                else
                                    if (mail.length < 5) {
                                        $("#erroritem").text("le mail doit contenir 5 carectere  ");
                                    }
                                    else 
                                      {

                                      $(".modal-title").text("Bienvenue Monsieur " + $("#nom").val() + " " + $("#prenom").val());
                                      $(".erroritem").text(""); 
                                        $(".modal-body").html("Votre date de naissance est " + $("#inputEmail3").val() +"<br>");
                                         $(".modal-body").append('<img src = "https://maps.googleapis.com/maps/api/staticmap?markers=' + $("#adresse").val() + '&zoom=12&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"><br>');
                                        $(".modal-body").append('<a href="https://maps.googleapis.com/maps/api/staticmap?markers=' + $("#adresse").val() + '&zoom=15&size=700x550&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg">' + $("#adresse").val() + '</a>');
                                         $('.myModal').modal("show");
                                         }


    }
    );
});
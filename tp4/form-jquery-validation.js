
$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
    
     //ajout du compteur de nombre de caractéres pour chaque champ
            $(document).keyup(function(){
// ajout des compteurs de caractére a coté de chaque champs de saisie 
    var nombreCaractere = $("#name").val().length;
    var msg =  " " + nombreCaractere + ' Caractère(s)';
    $('#compteur1').text(msg);

    var nombreCaractere = $("#firstname").val().length;
    var msg = " "+ nombreCaractere + ' Caractère(s)';
    $('#compteur2').text(msg);

    var nombreCaractere = $("#birth").val().length;
    var msg =  " "+ nombreCaractere + ' Caractère(s)';
    $('#compteur3').text(msg);

    var nombreCaractere = $("#adresse").val().length;
    var msg = " "+ nombreCaractere + ' Caractère(s)';
    $('#compteur4').text(msg);
    
    var nombreCaractere = $("#mail").val().length;
    var msg = " "+ nombreCaractere + ' Caractère(s)';
    $('#compteur5').text(msg);

    // validation des champs avec un minimum de 5 
   

                valid = true ;
                if($("#name").val().length < 5 ){
                    $("#name").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#name").css("border-color","#48DE14");
                }
                if($("#firstname").val().length < 5 ){
                    $("#firstname").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#firstname").css("border-color","#48DE14");
                }
                if($("#birth").val().length < 5 ){
                    $("#birth").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#birth").css("border-color","#48DE14");
                }
                if($("#adresse").val().length < 5 ){
                    $("#adresse").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#adresse").css("border-color","#48DE14");
                }
                if($("#mail").val().length < 5 ){
                    $("#mail").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#mail").css("border-color","#48DE14");
                }

                return valid;

            });


            $("#formulaire").on("submit",function store(event) { 
                event.preventDefault();
                
                    var inputNom= document.getElementById("name");
                    var inputPrenom= document.getElementById("firstname");
                    var inputDn= document.getElementById("birth");
                    var inputAdresse= document.getElementById("adresse");
                    var inputEmail= document.getElementById("mail");
                    
                    if($("#nom").val() !== "" && $("#firstname").val() !== "" && $("#birth").val() !== "" 
                  && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
                    
                    //stocker les valeurs saisie dans le navigateur
                    localStorage.setItem("name", inputNom.value);
                    localStorage.setItem("firstname", inputPrenom.value);
                    localStorage.setItem("birth", inputDn.value);
                    localStorage.setItem("adresse", inputAdresse.value);
                    localStorage.setItem("mail", inputEmail.value);

                   $('#success').addClass("alert alert-success").text("le formulaire est sauvegardé dans le tableau");

                  // $("#tablee").show();
                   
                   // ajout des valeurs saisie dans le tableau
                   document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
                   .innerHTML +'<tr><td>'+localStorage.getItem("name")+'</td><td>'+localStorage.getItem("firstname")
                   
                  
                   +'</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q='
                   +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse")
                  
                   +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
                   }
                  
            });
            

    

});
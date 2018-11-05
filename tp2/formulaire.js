function validation() {
    var nom = document.getElementById('nom').value;
   
    var prenom = document.getElementById('prenom').value;
  

    var adresse = document.getElementById('adresse').value;
   
      var mail = document.getElementById('mail').value;
    
    
    if (nom.length==0) {
        document.querySelector("#erroritem").textContent="le champ nom est vide  ";
    }
    else
    if (nom.length<5) {
        document.querySelector("#erroritem").textContent="le nom doit contenir au moins 5 caractaires ";
    }
    else
    if (prenom.length==0) {
        document.querySelector("#erroritem1").textContent="le champ prenom est vide ";
    }
    else
    if (prenom.length<5) {
        document.querySelector("#erroritem1").textContent="le prenom doit contenir au moins 5 caractaires ";
    }
    else
    if (adresse.length==0) {
        document.querySelector("#erroritem2").textContent="le champ d'adresse est vide";
    }
    else
    if (adresse.length<5) {
        document.querySelector("#erroritem2").textContent="l'adresse doit contenir au moins 5 caractaires ";
    }
    else
    if (mail.length==0) {
        document.querySelector("#erroritem3").textContent="le champ email est vide";
    }
    else
    if (mail.length<5) {
        document.querySelector("#erroritem3").textContent="l'email doit contenir au moins 5 caractaires ";
    }
    else
    if (nom.length>=5 && prenom.length>=5 && mail.length>=5 && adresse.length>=5)
    {
        document.querySelector("#resultat").textContent="Bienvenue Monsieur " + document.querySelector("#nom").value + " " + document.querySelector("#prenom").value;
        document.querySelector("#erroritem").textContent="" 
        document.querySelector("#erroritem1").textContent="" 
        document.querySelector("#erroritem2").textContent="" 
        document.querySelector("#erroritem3").textContent="" 
    }
    }








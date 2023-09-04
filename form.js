// FORMULAIRE


function verifNom() {
  // role : vérifie que le nom saisi fait au moins 2 caractères sinon afficher un msg d'erreur
  // retour : true si c'est ok false si ce n'est pas bon
  // paramètres : néant

  // récupérer la valeur saisie pour le nom
  let nom = document.querySelector("[name='nom']").value;

  // récupérer le msg d'erreur
  let error = document.getElementById("error-nom");

  // si le nom à au moins 2 caractères :
  if (nombreCaracteres(nom) >= 2) {
    // ne pas afficher le msg d'erreur et retourner true
    error.style.display = "none";
    return true;
  } else {
    // on affiche le msg d'erreur et retourner false
    error.textContent = "Le champ 'Nom' est obligatoire !";
    error.style.display = "block";
    return false;
  }
}
function verifPrenom() {
  // role : vérifie que le prénom saisi fait au moins 2 caractères sinon afficher un msg d'erreur
  // retour : true si c'est ok false si ce n'est pas bon
  // paramètres : néant

  // récupérer la valeur saisie pour le prénom
  let prenom = document.querySelector("[name='prenom']").value;

  // récupérer le msg d'erreur
  let error = document.getElementById("error-prenom");

  // si le prénom a au moins 2 caractères :
  if (nombreCaracteres(prenom) >= 2) {
    // ne pas afficher le msg d'erreur et retourner true
    error.style.display = "none";
    return true;
  } else {
    // on affiche le msg d'erreur et retourner false
    error.textContent = "Le champ 'Prénom' est obligatoire !";
    error.style.display = "block";
    return false;
  }
}

function verifAdresse() {
  // role : vérifie que l'adresse saisie fait au moins 2 caractères sinon afficher un msg d'erreur
  // retour : true si c'est ok false si ce n'est pas bon
  // paramètres : néant

  // récupérer la valeur saisie pour l'adresse
  let adresse = document.querySelector("[name='adresse']").value;

  // récupérer le msg d'erreur
  let error = document.getElementById("error-adresse");

  // si l'adresse a au moins 2 caractères :
  if (nombreCaracteres(adresse) >= 2) {
    // ne pas afficher le msg d'erreur et retourner true
    error.style.display = "none";
    return true;
  } else {
    // on affiche le msg d'erreur et retourner false
    error.textContent = "Le champ 'Adresse' est obligatoire !";
    error.style.display = "block";
    return false;
  }
}
function verifVille() {
  // role : vérifie que la ville saisie fait au moins 2 caractères sinon afficher un msg d'erreur
  // retour : true si c'est ok false si ce n'est pas bon
  // paramètres : néant

  // récupérer la valeur saisie pour la ville
  let ville = document.querySelector("[name='ville']").value;

  // récupérer le msg d'erreur
  let error = document.getElementById("error-ville");

  // si la ville a au moins 2 caractères :
  if (nombreCaracteres(ville) >= 2) {
    // ne pas afficher le msg d'erreur et retourner true
    error.style.display = "none";
    return true;
  } else {
    // on affiche le msg d'erreur et retourner false
    error.textContent = "Le champ 'Ville' est obligatoire !";
    error.style.display = "block";
    return false;
  }
}
function verifCPostal() {
  // role : vérifie que le code postal saisi fait au moins 2 caractères sinon afficher un msg d'erreur
  // retour : true si c'est ok false si ce n'est pas bon
  // paramètres : néant

  // récupérer la valeur saisie pour le code postal
  let cpostal = document.querySelector("[name='cpostal']").value;

  // récupérer le msg d'erreur
  let error = document.getElementById("error-cpostal");

  // si le code postal a au moins 2 caractères :
  if (nombreCaracteres(cpostal) >= 2) {
    // ne pas afficher le msg d'erreur et retourner true
    error.style.display = "none";
    return true;
  } else {
    // on affiche le msg d'erreur et retourner false
    error.textContent = "Le champ 'Code postal' est obligatoire !";
    error.style.display = "block";
    return false;
  }
}
function verifMail() {
  // role : vérifie que le mail saisi fait au moins 2 caractères sinon afficher un msg d'erreur
  // retour : true si c'est ok false si ce n'est pas bon
  // paramètres : néant

  // récupérer la valeur saisie pour le mail
  let mail = document.querySelector("[name='mail']").value;

  // récupérer le msg d'erreur
  let error = document.getElementById("error-mail");

  // vérifier si le format de l'adresse mail est valide
  let mailFormat = new RegExp("^[a-zA-Z0-9_.-]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,4}$");

  // si l'adresse mail a au moins 2 caractères :
  if (mailFormat.test(mail)) {
    // ne pas afficher le msg d'erreur et retourner true
    error.style.display = "none";
    return true;
  } else {
    // on affiche le msg d'erreur et retourner false
    error.textContent = "L'adresse mail est invalide !";
    error.style.display = "block";
    return false;
  }

}
function verifTel() {
  // role : vérifie que le tel saisi fait au moins 2 caractères sinon afficher un msg d'erreur
  // retour : true si c'est ok false si ce n'est pas bon
  // paramètres : néant

  // récupérer la valeur saisie pour le tel
  let tel = document.querySelector("[name='tel']").value;

  // récupérer le msg d'erreur
  let error = document.getElementById("error-tel");

  // si le tel a au moins 2 caractères :
  if (nombreCaracteres(tel) >= 2) {
    // ne pas afficher le msg d'erreur et retourner true
    error.style.display = "none";
    return true;
  } else {
    // on affiche le msg d'erreur et retourner false
    error.textContent = "Le champ 'Téléphone' est obligatoire !";
    error.style.display = "block";
    return false;
  }
}
function verification() {
  // role : vérifie si le formulaire peut être envoyé
  // retour : true si ok et false sinon (return dans HTML transmet à l'event onsubmit si formulaire true ok false empêche soumission du form)
  // paramètres : néant

  let okNom = verifNom();
  let okPrenom = verifPrenom();
  let okAdresse = verifAdresse();
  let okVille = verifVille();
  let okCPostal = verifCPostal();
  let okMail = verifMail();
  let okTel = verifTel();

  // si tous les champs sont valides
  if (okNom && okPrenom && okAdresse && okVille && okCPostal && okMail && okTel) {
    // on retourne true;
    return true;
  } else {
    // sinon (au moins 1 est mauvais)
    // on retourne false
    return false;
  }
}

function nombreCaracteres(text) {
  // role : donner le nombre de caractère d'un texte
  // retour : le nombre de caractères
  // paramètres :
  //              texte : champ dont on veut le nombre de caractères
  return text.length;
}
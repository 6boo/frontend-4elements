// CHANGEMENT COULEUR DU HEADER AU SCROLL

window.addEventListener("scroll", changerHeader);

function changerHeader() {
  // Rôle : ajouter et enlever une classe CSS qui modifie la couleur de fond du header lorsque la hauteur de scroll est superieure à la hauteur du slider
  // Paramètres : néant
  // Retour : néant

  // on récupère la hauteur de scroll avec scrollY (défilement vertical)
  // console.log(window.scrollY)

  // on récupère le slider et le header
  let banniere = document.getElementById("slider");
  let header = document.querySelector("header");

  // on doit connaitre à chaque instant la position du slider par rapport à la fenêtre
  let hauteur = parseInt(banniere.getBoundingClientRect().height);

  // si le scroll vertical est supérieur à la hauteur du slider
  if (window.scrollY >= hauteur - 64) {
    // on ajoute la classe qui change la couleur de fond du header
    header.classList.add("bg-change");
  } else { // sinon on enlève la classe
    header.classList.remove("bg-change");
  }
}
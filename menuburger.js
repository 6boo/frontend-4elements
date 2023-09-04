// LE MENU BURGER EN VERSION SMALL

function toggleMenu() {
  // Rôle : ajouter ou enlever la classe qui affiche le menu latéral
  // Paramètres : néant
  // Retour : néant

  // on récupère le menu latéral
  let slideburger = document.querySelector(".slideburger");

  // on affiche ou enlève le menu latéral
  slideburger.classList.toggle("menu-cache");
}
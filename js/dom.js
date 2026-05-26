// --------------------------------------------------
// Sélecteurs DOM
// --------------------------------------------------
const hourColumn = document.querySelector('.hour-column');
const dayColumns = document.querySelector('.day-columns');
const planningHeader = document.querySelector('.planning-header');

// popup
const popup = document.getElementById("popup-event");
const popupTitre = document.getElementById("popup-titre");
const popupDebut = document.getElementById("popup-debut");
const popupFin = document.getElementById("popup-fin");
const popupModifier = document.getElementById("popup-modifier");
const popupSupprimer = document.getElementById("popup-supprimer");
const popupFermer = document.getElementById("popup-fermer");

const formulaire = document.getElementById('formulaire');
const inputLibelle = document.getElementById('libelle');
const inputDebut = document.getElementById('debut');
const inputFin = document.getElementById('fin');
const inputCouleur = document.getElementById('couleur');
const btnValider = document.getElementById('valider');
const btnAnnuler = document.getElementById('annuler');

const btnClear = document.getElementById('btn-clear');

const daysFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

let currentMonday = getMonday(new Date());
let events = [];
let eventToEdit = null;

// --------------------------------------------------
// Formulaire
// --------------------------------------------------
btnAnnuler.onclick = e => {
  e.preventDefault();
  formulaire.style.display = "none";
};

btnValider.onclick = e => {
  e.preventDefault();

  const lib = inputLibelle.value.trim();
  const deb = new Date(inputDebut.value);
  const fin = new Date(inputFin.value);
  const col = inputCouleur.value;

  if (!lib || !inputDebut.value || !inputFin.value) {
    alert("Champs manquants");
    return;
  }

  if (eventToEdit) {
    eventToEdit.libelle = lib;
    eventToEdit.debut = deb;
    eventToEdit.fin = fin;
    eventToEdit.couleur = col;
    eventToEdit.gereCreneaux();
  } else {
    const ev = new Evenement(Date.now(), deb, fin, lib, col);
    ev.gereCreneaux();
    events.push(ev);
  }

  saveEvents();
  formulaire.style.display = "none";
  changeWeek(currentMonday);
};

// --------------------------------------------------
// Popup
// --------------------------------------------------
popupModifier.onclick = () => {
  popup.style.display = "none";

  inputLibelle.value = eventToEdit.libelle;
  inputDebut.value = toDatetimeLocalString(eventToEdit.debut);
  inputFin.value = toDatetimeLocalString(eventToEdit.fin);
  inputCouleur.value = eventToEdit.couleur;

  formulaire.style.display = "block";
};

popupSupprimer.onclick = () => {
  if (confirm("Supprimer cet évènement ?")) {
    events = events.filter(ev => ev.id !== eventToEdit.id);
    saveEvents();
    popup.style.display = "none";
    changeWeek(currentMonday);
  }
};

popupFermer.onclick = () => {
  popup.style.display = "none";
};

// --------------------------------------------------
// Affichage événement
// --------------------------------------------------
function renderEvent(ev) {
  ev.creneaux.forEach(cr => {
    const dIdx = (cr.debut.getDay()+6)%7;
    const col = dayColumns.children[dIdx];
    if (!col) return;

    const zone = col.querySelector(".day-cell");
    if (!zone) return;

    const startMin = cr.debut.getHours()*60 + cr.debut.getMinutes();
    const endMin = cr.fin.getHours()*60 + cr.fin.getMinutes();
    const top = startMin;
    const height = endMin - startMin;

    const div = document.createElement("div");
    div.className = "creneau";
    div.style.background = ev.couleur;
    div.style.top = top+"px";
    div.style.height = height+"px";
    div.textContent = ev.libelle;

    div.addEventListener("click", (e) => {
      e.stopPropagation();

      popupTitre.textContent = ev.libelle;
      popupDebut.textContent = cr.debut.toLocaleString();
      popupFin.textContent = cr.fin.toLocaleString();
      eventToEdit = ev;

      popup.style.display = "block";
    });

    zone.appendChild(div);
  });
}

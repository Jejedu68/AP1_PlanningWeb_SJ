// --------------------------------------------------
// LocalStorage
// --------------------------------------------------
function saveEvents() {
  localStorage.setItem(getWeekKey(currentMonday), JSON.stringify(events));
}

function loadEvents() {
  const data = JSON.parse(localStorage.getItem(getWeekKey(currentMonday)) || "[]");
  events = data.map(ev => {
    const e = new Evenement(ev.id, ev.debut, ev.fin, ev.libelle, ev.couleur);
    e.gereCreneaux();
    return e;
  });
}

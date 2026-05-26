// --------------------------------------------------
// Navigation
// --------------------------------------------------
function changeWeek(mon) {
  currentMonday = new Date(mon);

  // Génération du planning
  generateWeekHeader();
  generateHours();
  generateDayColumns();

  // Chargement des événements depuis le localStorage
  loadEvents();

  // Affichage des événements
  events.forEach(renderEvent);

  // Mise à jour de l'affichage de la semaine
  const sunday = new Date(currentMonday);
  sunday.setDate(currentMonday.getDate() + 6);

  document.getElementById("week-display").textContent =
    `${formatDate(currentMonday)} → ${formatDate(sunday)}`;
}

// Boutons précédent / suivant
document.getElementById("prev-week").onclick = () => {
  const d = new Date(currentMonday);
  d.setDate(d.getDate() - 7);
  changeWeek(d);
};

document.getElementById("next-week").onclick = () => {
  const d = new Date(currentMonday);
  d.setDate(d.getDate() + 7);
  changeWeek(d);
};

btnClear.onclick = () => {
  if (!confirm("Voulez-vous vraiment vider tous les événements de cette semaine ?")) return;

  events = [];

  localStorage.removeItem(getWeekKey(currentMonday));

  changeWeek(currentMonday);
};

// --------------------------------------------------
// Initialisation au chargement du DOM
// --------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  changeWeek(currentMonday);
});

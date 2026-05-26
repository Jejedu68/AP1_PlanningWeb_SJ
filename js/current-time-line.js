// --------------------------------------------------
// Ligne de l'heure actuelle
// --------------------------------------------------

function updateCurrentTimeLine() {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll('.current-time-line').forEach(el => el.remove());

  const line = document.createElement('div');
  line.className = 'current-time-line';
  line.style.position = 'absolute';
  line.style.height = '2px';
  line.style.background = 'red';
  line.style.top = minutes + 'px';
  line.style.left = '0';
  line.style.right = '0';
  line.style.zIndex = '5';

  document.querySelectorAll('.day-column').forEach(col => col.appendChild(line.cloneNode()));

  // Mise à jour toutes les minutes
  setTimeout(updateCurrentTimeLine, 60000);
}

// --------------------------------------------------
// Initialisation après génération du planning
// --------------------------------------------------

const originalChangeWeek = changeWeek;
changeWeek = function(mon) {
  originalChangeWeek(mon);    
  updateCurrentTimeLine();    
};

updateCurrentTimeLine();

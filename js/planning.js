// --------------------------------------------------
// Création planning
// --------------------------------------------------
function generateWeekHeader() {
  while (planningHeader.children.length > 1)
    planningHeader.removeChild(planningHeader.lastChild);

  for (let i=0; i<7; i++) {
    const d = new Date(currentMonday);
    d.setDate(currentMonday.getDate()+i);

    const div = document.createElement("div");
    div.className = "day-header";
    div.textContent = `${daysFr[d.getDay()]} ${formatDate(d)}`;
    planningHeader.appendChild(div);
  }
}

function generateHours() {
  hourColumn.innerHTML = "";
  for (let h=0; h<24; h++) {
    const div = document.createElement("div");
    div.className = "hour-cell";
    div.textContent = (h<10?'0':'') + h + ":00";
    hourColumn.appendChild(div);
  }
}

function generateDayColumns() {
  dayColumns.innerHTML = "";

  for (let d=0; d<7; d++) {
    const col = document.createElement("div");
    col.className = "day-column";

    const zone = document.createElement("div");
    zone.className = "day-cell";

    zone.addEventListener("click", (e) => {
      const rect = zone.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const minutes = Math.floor((y / rect.height) * 1440);

      const hour = Math.floor(minutes / 60);
      const min = minutes % 60;

      const date = new Date(currentMonday);
      date.setDate(currentMonday.getDate()+d);
      date.setHours(hour, min, 0,0);

      const fin = new Date(date);
      fin.setHours(fin.getHours()+1);

      eventToEdit = null;

      inputLibelle.value = "";
      inputDebut.value = toDatetimeLocalString(date);
      inputFin.value = toDatetimeLocalString(fin);
      inputCouleur.value = "#3f51b5";

      formulaire.style.display = "block";
    });

    col.appendChild(zone);

    for (let h=0; h<24; h++) {
      const line = document.createElement("div");
      line.className = "hour-line";
      line.style.top = (h*60)+"px";
      col.appendChild(line);
    }

    dayColumns.appendChild(col);
  }
}

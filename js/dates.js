// --------------------------------------------------
// Dates
// --------------------------------------------------
function getMonday(date) {
  date = new Date(date);
  let day = date.getDay();
  return new Date(date.setDate(date.getDate() - day + (day === 0 ? -6 : 1)));
}

function formatDate(date) {
  return String(date.getDate()).padStart(2,'0') + "/" + String(date.getMonth()+1).padStart(2,'0');
}

function toDatetimeLocalString(date) {
  const tz = date.getTimezoneOffset() * 60000;
  return new Date(date - tz).toISOString().slice(0,16);
}

function getWeekKey(date) {
  const monday = getMonday(date);
  const y = monday.getFullYear();
  const m = String(monday.getMonth()+1).padStart(2,'0');
  const d = String(monday.getDate()).padStart(2,'0');
  return `events_${y}-${m}-${d}`;
}

// Lim inn i Google-arket: Utvidelser -> Apps Script. Distribuer som nettapp (tilgang: Alle).
function doPost(e) {
  const ark = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (ark.getLastRow() === 0) {
    ark.appendRow(["Tidspunkt", "Navn", "Kommer", "Voksne", "Barn", "Allergier", "Kake", "Hilsen"]);
  }
  const d = JSON.parse(e.postData.contents);
  ark.appendRow([new Date(), d.name, d.coming ? "Ja" : "Nei", d.adults, d.kids, d.allergier, d.kake, d.note]);
  return ContentService.createTextOutput("ok");
}

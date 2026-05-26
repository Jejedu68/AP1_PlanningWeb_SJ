// --------------------------------------------------
// Classe Evenement
// --------------------------------------------------
class Evenement {
  constructor(id, debut, fin, libelle, couleur) {
    this.id = id;
    this.debut = new Date(debut);
    this.fin = new Date(fin);
    this.libelle = libelle;
    this.couleur = couleur;
    this.creneaux = [];
  }

  gereCreneaux() {
    this.creneaux = [];
    let start = new Date(this.debut);

    while (start < this.fin) {
      const endOfDay = new Date(start);
      endOfDay.setHours(23,59,59);

      const end = this.fin < endOfDay ? this.fin : endOfDay;

      this.creneaux.push({
        debut: new Date(start),
        fin: new Date(end)
      });

      start = new Date(endOfDay);
      start.setDate(start.getDate()+1);
      start.setHours(0,0,0);
    }
  }
}

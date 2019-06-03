export class Pharmacie {
    public id: number;
    public nom: string;
    public adresse; string;
    public longitude: number;
    public latitude: number;
    public nbPersonnel: number;

    constructor(id, nom, adresse, longitude, latitude, nbPersonnel){
        this.id = id;
        this.nom = nom;
        this.adresse = adresse;
        this.latitude = latitude;
        this.longitude = longitude;
        this.nbPersonnel = nbPersonnel;
    }
}

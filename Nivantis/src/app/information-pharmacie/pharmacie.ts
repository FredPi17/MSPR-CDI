import {assertNumber} from "@angular/core/src/render3/assert";

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

    getDistance(latitudeAcutelle : number, longitudeActuelle: number) : number {
        var p = Math.PI / 180;
        var c = Math.cos;
        var a = 0.5 - c((this.latitude - latitudeAcutelle) * p) / 2 +
            c(latitudeAcutelle * p) * c(this.latitude * p) *
            (1 - c((this.longitude - longitudeActuelle) * p)) / 2;
        return (12742 * Math.asin(Math.sqrt(a))) * 1000;
    }
}

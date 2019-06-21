export class Pharmacie {

    private _id?: number;
    private _nom?: string;
    private _adresse?: string;
    private _CP?: number;
    private _ville?: string;
    private _longitude?: number;
    private _latitude?: number;
    private _nbPersonnel?: number;

    constructor(id, nom, adresse, cp, ville, longitude, latitude, nbPersonnel) {
        this._id = id;
        this._nom = nom;
        this._adresse = adresse;
        this._CP = cp;
        this._ville = ville;
        this._latitude = latitude;
        this._longitude = longitude;
        this._nbPersonnel = nbPersonnel;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get adresse() {
        return this._adresse;
    }

    set adresse(value) {
        this._adresse = value;
    }

    get CP(): number {
        return this._CP;
    }

    set CP(value: number) {
        this._CP = value;
    }

    get ville(): string {
        return this._ville;
    }

    set ville(value: string) {
        this._ville = value;
    }

    get longitude(): number {
        return this._longitude;
    }

    set longitude(value: number) {
        this._longitude = value;
    }

    get latitude(): number {
        return this._latitude;
    }

    set latitude(value: number) {
        this._latitude = value;
    }

    get nbPersonnel(): number {
        return this._nbPersonnel;
    }

    set nbPersonnel(value: number) {
        this._nbPersonnel = value;
    }

    getDistance(latitudeAcutelle: number, longitudeActuelle: number): number {
        const p = Math.PI / 180;
        const c = Math.cos;
        const a = 0.5 - c((this.latitude - latitudeAcutelle) * p) / 2 +
            c(latitudeAcutelle * p) * c(this.latitude * p) *
            (1 - c((this.longitude - longitudeActuelle) * p)) / 2;
        return (12742 * Math.asin(Math.sqrt(a))) * 1000;
    }
}

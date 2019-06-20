export class Pharmacie {

    private _id?: number;
    private _nom?: string;
    private _adresse?: string;
    private _longitude?: number;
    private _latitude?: number;
    private _nbPersonnel?: number;

    constructor(id, nom, adresse, longitude, latitude, nbPersonnel) {
        this._id = id;
        this._nom = nom;
        this._adresse = adresse;
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
}

export class Utilisateur {
    private _id: string;
    private _nom: string;
    private _prenom: string;
    private _email: string;
    private _motdepasse: string;
    private _statut: string;


    constructor(nom: string, prenom: string, email: string, motdepasse: string, status: string) {
        this._nom = nom;
        this._prenom = prenom;
        this._email = email;
        this._motdepasse = motdepasse;
        this._statut = status;
    }


    get nom(): string {
        return this._nom;
    }

    get prenom(): string {
        return this._prenom;
    }

    get email(): string {
        return this._email;
    }

    get motdepasse(): string {
        return this._motdepasse;
    }

    get statut(): string {
        return this._statut;
    }
}
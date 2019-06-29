export class Informations {
    public besoin: number;
    public ventes: number;
    public derniereFormation: string;
    public nom: string;
    public prix: number;

    constructor(besoin, ventes, derniereFormation, nom, prix) {
        this.besoin = besoin;
        this.ventes = ventes;
        this.derniereFormation = derniereFormation;
        this.nom = nom;
        this.prix = prix;
    }
}

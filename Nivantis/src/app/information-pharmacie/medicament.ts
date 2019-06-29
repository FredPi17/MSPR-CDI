export class Medicament {
    public id: number;
    public nom: string;
    public prix: number;

    constructor(id, nom, prix) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
    }
}

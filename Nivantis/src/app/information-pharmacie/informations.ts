export class Informations {
    public idPharmacie: number;
    public idMedicament: number;
    public besoin: number;
    public ventes: number;
    public derniereFormation: string;

    constructor(idPharmacie, idMedicament, besoin, ventes, derniereFormation){
        this.idPharmacie = idPharmacie;
        this.idMedicament = idMedicament;
        this.besoin = besoin;
        this.ventes = ventes;
        this.derniereFormation = derniereFormation;
    }
}

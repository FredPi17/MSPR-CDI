import {Pharmacie} from './pharmacie';
import {Medicament} from './medicament';

export class Informations {
    public pharmacie: Pharmacie;
    public medicament: Medicament;
    public besoin: number;
    public ventes: number;
    public derniereFormation: string;

    constructor(pharmacie, medicament, besoin, ventes, derniereFormation) {
        this.pharmacie = pharmacie;
        this.medicament = medicament;
        this.besoin = besoin;
        this.ventes = ventes;
        this.derniereFormation = derniereFormation;
    }
}

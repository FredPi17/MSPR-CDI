import {Component, Directive, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pharmacie} from './pharmacie';
import { Medicament} from './medicament';
import { Informations} from './informations';

@Component({
  selector: 'app-information-pharmacie',
  templateUrl: './information-pharmacie.component.html',
  styleUrls: ['./information-pharmacie.component.scss'],
})
export class InformationPharmacieComponent implements OnInit {


  constructor() { }

  selectedPharmacie: Pharmacie;
  selectedInformations: Informations;
  pharmacies: Pharmacie[] = [];
  pharmacie1: Pharmacie;
  pharmacie2: Pharmacie;
  pharmacie3: Pharmacie;
  pharmacie4: Pharmacie;
  medicaments: Medicament[] = [];
  medicament1: Medicament;
  medicament2: Medicament;
  medicament3: Medicament;
  informations: Informations[] = [];
  information1: Informations;
  information2: Informations;
  information3: Informations;
  information4: Informations;
  information5: Informations;

ngOnInit() {
  this.pharmacie1 = new Pharmacie(
      1, 'St Bruno', '1 rue St Bruno',
      2.34, 4.46,
      25
  );

  this.pharmacie2 = new Pharmacie(
      2,
      'Des Arts',
      '2 rue Des Arts',
      3.345,
      5.677,
      2
  );

  this.pharmacie3 = new Pharmacie(
      3,
      'Victor Hugo',
      '3 place Victor hugo',
      7.34,
      9.34534,
      12
  );

  this.pharmacie4 = new Pharmacie(
      4,
      'Champolion',
      '4 rue Chapmolion',
      1.234,
      8.45,
      12
  );
  this.pharmacies.push(this.pharmacie1);
  this.pharmacies.push(this.pharmacie2);
  this.pharmacies.push(this.pharmacie3);
  this.pharmacies.push(this.pharmacie4);
  this.medicament1 = new Medicament(1, 'Aspirine', 1.50);
  this.medicament2 = new Medicament(2, 'Doliprane 1000', 5.75);
  this.medicament3 = new Medicament(3, 'Imeth', 2.00);
  this.medicaments.push(this.medicament1);
  this.medicaments.push(this.medicament2);
  this.medicaments.push(this.medicament3);
  this.information1 = new Informations(1, 1, 10, 8, 'null');
  this.information1 = new Informations(1, 2, 30, 20, 'null');
  this.information1 = new Informations(2, 1, 5, 10, 'null');
  this.information1 = new Informations(3, 2, 15, 6, 'null');
  this.information1 = new Informations(4, 3, 13, 11, 'null');
  this.informations.push(this.information1);
  this.informations.push(this.information2);
  this.informations.push(this.information3);
  this.informations.push(this.information4);
  this.informations.push(this.information5);
}

getPharmacieByID(id: number) {
    return this.pharmacies.find(x => x.id === id);
  }

  getInformationPharmacie(id: number){
    return this.informations.find(x => x.idPharmacie === id);
  }

onSelect(pharmacieID: number) {
    this.selectedPharmacie = this.getPharmacieByID(Number(pharmacieID));
    this.selectedInformations = this.getInformationPharmacie(Number(pharmacieID));
  }
}

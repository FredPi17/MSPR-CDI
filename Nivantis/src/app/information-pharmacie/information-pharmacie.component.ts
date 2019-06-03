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

  selected: Informations[];

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
      '4 rue Champolion',
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
  this.information1 = new Informations(this.pharmacie1, this.medicament1, 10, 8, 'null');
  this.information2 = new Informations(this.pharmacie1, this.medicament2, 30, 20, 'null');
  this.information3 = new Informations(this.pharmacie2, this.medicament1, 5, 10, 'null');
  this.information4 = new Informations(this.pharmacie3, this.medicament2, 15, 6, 'null');
  this.information5 = new Informations(this.pharmacie4, this.medicament3, 13, 11, 'null');
  this.informations.push(this.information1);
  this.informations.push(this.information2);
  this.informations.push(this.information3);
  this.informations.push(this.information4);
  this.informations.push(this.information5);
}

  onSave(){
    console.log('todo save function');
  }

  getInformationPharmacie(id: number) {
    return this.informations.filter(x => x.pharmacie.id === id);
  }

onSelect(id: number) {
    this.selected = this.getInformationPharmacie(Number(id));
  }
}

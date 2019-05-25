import {Component, Directive, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pharmacie} from './pharmacie';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-information-pharmacie',
  templateUrl: './information-pharmacie.component.html',
  styleUrls: ['./information-pharmacie.component.scss'],
})
export class InformationPharmacieComponent implements OnInit {

  pharmacieForm: FormGroup;
  submitted: false;
  success: false;

  selectedPharmacie: Pharmacie;

  pharmacies: Pharmacie[] = [
    {
      id: 1,
      name: 'St Bruno'
    },
    {
      id: 2,
      name: 'Des Arts'
    },
    {
      id: 3,
      name: 'Victor Hugo'
    },
    {
      id: 4,
      name: 'Champolion'
    }
  ];

  constructor() { }

  ngOnInit() {  }

  getPharmacieByID(id: number): Pharmacie {
    return this.pharmacies.find(x => x.id === id);
  }

  onSelect(pharmacieID: number) {
    this.selectedPharmacie = this.getPharmacieByID(Number(pharmacieID));
  }
}

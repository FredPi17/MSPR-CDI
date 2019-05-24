import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { CalculData } from '../CalculData';

@Component({
  selector: 'app-page-calcul',
  templateUrl: './page-calcul.component.html',
  styleUrls: ['./page-calcul.component.scss'],
})

export class PageCalculComponent implements OnInit {

  calculForm: FormGroup;
  model: CalculData;

  constructor(private formBuilder: FormBuilder) {
    this.model = new CalculData(0,0,0,0,0);
  }

  ngOnInit() {
    this.calculForm = this.formBuilder.group({
      prixachatnet: new FormControl('', {updateOn : 'blur'}),
      prixachatbrut: new FormControl('', {updateOn : 'blur'}),
      prixventenet: new FormControl('', {updateOn : 'blur'}),
      tauxremise: new FormControl('', {updateOn : 'blur'}),
      coefficient: new FormControl('', {updateOn : 'blur'})
    });
  }
}



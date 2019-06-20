import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPharmacieComponent } from './information-pharmacie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


describe('InformationPharmacieComponent', () => {
  let component: InformationPharmacieComponent;
  let fixture: ComponentFixture<InformationPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ InformationPharmacieComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('devrait retourner  pharmacie victor hugo', () => {
    const latitude = 45.189339;
    const longitude =  5.724192;
    const pharmacie = component.getPharmacie(latitude, longitude, this.listPharmacie);
    expect(pharmacie.adresse.toUpperCase).toBe('9 PLACE VICTOR HUGO, 38000 GRENOBLE');
    expect(pharmacie.nom.toUpperCase).toBe('PHARMACIE VICTOR HUGO');
  });

  it('devrais retourner les medicaments de une pharmacie',() => {
    const informations = component.getInformationPharmacie(1);
    const medicaments =informations.getMedicaments();
    expect(medicaments).not.toBe(null);
  });

  it('devrais retourner les ventes de une pharmacie',() => {
    const informations = component.getInformationPharmacie(1);
    const ventes =informations.getVentes();
    expect(ventes).not.toBe(null);
  });
});

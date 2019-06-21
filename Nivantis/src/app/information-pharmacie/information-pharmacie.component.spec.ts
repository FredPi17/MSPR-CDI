import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {InformationPharmacieComponent} from './information-pharmacie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Pharmacie} from './pharmacie';


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

  it('devrait retourner pharmacie victor hugo', () => {
    const latitude = '45.189339';
    const longitude = '5.724192';
    const pharmacie = component.sortPharmaciesByDistance(latitude, longitude);
    expect(pharmacie.adresse.toUpperCase).toBe('9 PLACE VICTOR HUGO');
    expect(pharmacie.CP).toBe(38000);
    expect(pharmacie.ville.toUpperCase).toBe('GRENOBLE');
    expect(pharmacie.nom.toUpperCase).toBe('PHARMACIE VICTOR HUGO');
  });

  it('devrais retourner un objet information', () => {
    const informations = component.getInformationPharmacie(1);
    expect(informations).not.toBe(null);
  });


  it('Doit retourner la distance 126.194 mètres avec la latitude 45.189339 et la longitude 5.724192 pour la Pharmacie Victor Hugo', () => {
     const actualLatitude = 45.189339;
     const actualLongitude = 5.724192;
     const pharmacie = new Pharmacie(1, 'PHARMACIE VICTOR HUGO', '9 PLACE VICTOR HUGO', 38000, 'GRENOBLE', 5.725564, 45.188749, 10);
     expect(pharmacie.getDistance(actualLatitude, actualLongitude)).toBe(126.194);
  });
});

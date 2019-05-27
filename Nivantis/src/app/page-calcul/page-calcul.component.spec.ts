import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PageCalculComponent } from './page-calcul.component';
import {CalculData} from '../CalculData';

describe('PageCalculComponent', () => {
  let component: PageCalculComponent;
  let fixture: ComponentFixture<PageCalculComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ PageCalculComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Doit retourner un taux de remise de 50 quand le prix d\'achat net est de 15 et que le prix d\'achat brut est de 30', () => {
    const calculData = new CalculData(0, 0, 0);
    calculData.prixAchatBrut = 30;
    calculData.prixAchatNet = 15;
    const result = calculData.tauxRemise;
    expect(result).toEqual(50);
  });
});

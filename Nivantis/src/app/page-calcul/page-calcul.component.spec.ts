import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PageCalculComponent } from './page-calcul.component';
import {CalculData} from '../CalculData';

=======
import { PageCalculComponent } from './page-calcul.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> c3329049c8a9fb974aeaefa3ad1f9e6700465a79
describe('PageCalculComponent', () => {
  let component: PageCalculComponent;
  let fixture: ComponentFixture<PageCalculComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ PageCalculComponent ],
<<<<<<< HEAD
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
=======
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule]
>>>>>>> c3329049c8a9fb974aeaefa3ad1f9e6700465a79
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCalculComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
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

  it('quand insertion prix achat brut 30 et prix achat net 15 deverait retouner taux de remise 50 ', () => {
    component.calculForm.controls.prixachatbrut.setValue(30);
    component.calculForm.controls.prixachatnet.setValue(15);
    expect(component.model.tauxRemise).toBe(50);
  });
});

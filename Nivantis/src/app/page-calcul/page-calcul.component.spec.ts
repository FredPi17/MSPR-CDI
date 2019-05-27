import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CalculData} from '../CalculData';
import { PageCalculComponent } from './page-calcul.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  it('quand insertion prix achat brut 40 et taux de remise 50 deverait retouner prix achat net 20 ', () => {
    component.calculForm.controls.prixachatbrut.setValue(40);
    component.calculForm.controls.tauxremise.setValue(50);
    expect(component.model.prixAchatNet).toBe(20);
  });

  it('quand insertion prix achat brut 80 et coefficient multiplicateur 10 deverait retouner prix de vente net 800 ', () => {
    component.calculForm.controls.prixachatbrut.setValue(80);
    component.calculForm.controls.coefficient.setValue(10);
    expect(component.model.prixVenteNet).toBe(800);
  });

  it('quand insertion prix achat brut 20, prix achat net 18 et prix vente net 90 retouner coefficient multiplicateur 5', () => {
    component.calculForm.controls.prixachatbrut.setValue(20);
    component.calculForm.controls.prixachatnet.setValue(18);
    component.calculForm.controls.prixventenet.setValue(90);
    expect(component.model.coefficient).toBe(5);
  });
});

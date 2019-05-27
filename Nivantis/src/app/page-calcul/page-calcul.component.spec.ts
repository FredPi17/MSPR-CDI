import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCalculComponent } from './page-calcul.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('PageCalculComponent', () => {
  let component: PageCalculComponent;
  let fixture: ComponentFixture<PageCalculComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCalculComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule]
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

  it('quand insertion prix achat brut 30 et prix achat net 15 deverait retouner taux de remise 50 ', () => {
    component.calculForm.controls.prixachatbrut.setValue(30);
    component.calculForm.controls.prixachatnet.setValue(15);
    expect(component.model.tauxRemise).toBe(50);
  });
});

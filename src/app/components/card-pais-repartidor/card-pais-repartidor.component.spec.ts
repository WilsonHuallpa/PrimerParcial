import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaisRepartidorComponent } from './card-pais-repartidor.component';

describe('CardPaisRepartidorComponent', () => {
  let component: CardPaisRepartidorComponent;
  let fixture: ComponentFixture<CardPaisRepartidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPaisRepartidorComponent]
    });
    fixture = TestBed.createComponent(CardPaisRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

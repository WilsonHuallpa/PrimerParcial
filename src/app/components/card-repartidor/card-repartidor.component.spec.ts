import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRepartidorComponent } from './card-repartidor.component';

describe('CardRepartidorComponent', () => {
  let component: CardRepartidorComponent;
  let fixture: ComponentFixture<CardRepartidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRepartidorComponent]
    });
    fixture = TestBed.createComponent(CardRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

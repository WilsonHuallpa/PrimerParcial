import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHeladoComponent } from './eliminar-helado.component';

describe('EliminarHeladoComponent', () => {
  let component: EliminarHeladoComponent;
  let fixture: ComponentFixture<EliminarHeladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarHeladoComponent]
    });
    fixture = TestBed.createComponent(EliminarHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

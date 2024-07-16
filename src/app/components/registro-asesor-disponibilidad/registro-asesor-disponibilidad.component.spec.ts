import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAsesorDisponibilidadComponent } from './registro-asesor-disponibilidad.component';

describe('RegistroAsesorDisponibilidadComponent', () => {
  let component: RegistroAsesorDisponibilidadComponent;
  let fixture: ComponentFixture<RegistroAsesorDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAsesorDisponibilidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAsesorDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

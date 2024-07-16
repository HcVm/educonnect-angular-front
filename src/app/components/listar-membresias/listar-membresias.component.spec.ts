import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMembresiasComponent } from './listar-membresias.component';

describe('ListarMembresiasComponent', () => {
  let component: ListarMembresiasComponent;
  let fixture: ComponentFixture<ListarMembresiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMembresiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMembresiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

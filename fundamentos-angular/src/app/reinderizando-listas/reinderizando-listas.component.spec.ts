import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinderizandoListasComponent } from './reinderizando-listas.component';

describe('ReinderizandoListasComponent', () => {
  let component: ReinderizandoListasComponent;
  let fixture: ComponentFixture<ReinderizandoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinderizandoListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinderizandoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

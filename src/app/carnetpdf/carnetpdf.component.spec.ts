import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetpdfComponent } from './carnetpdf.component';

describe('CarnetpdfComponent', () => {
  let component: CarnetpdfComponent;
  let fixture: ComponentFixture<CarnetpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnetpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

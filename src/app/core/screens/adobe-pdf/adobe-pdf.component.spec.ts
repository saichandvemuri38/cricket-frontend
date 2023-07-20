import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobePdfComponent } from './adobe-pdf.component';

describe('AdobePdfComponent', () => {
  let component: AdobePdfComponent;
  let fixture: ComponentFixture<AdobePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdobePdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdobePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

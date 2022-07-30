import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferExtendedComponent } from './offer-extended.component';

describe('OfferExtendedComponent', () => {
  let component: OfferExtendedComponent;
  let fixture: ComponentFixture<OfferExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferExtendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

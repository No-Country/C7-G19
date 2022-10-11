import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertsComponent } from './offerts.component';

describe('OffertsComponent', () => {
  let component: OffertsComponent;
  let fixture: ComponentFixture<OffertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

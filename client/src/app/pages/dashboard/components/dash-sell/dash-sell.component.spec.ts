import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSellComponent } from './dash-sell.component';

describe('DashSellComponent', () => {
  let component: DashSellComponent;
  let fixture: ComponentFixture<DashSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

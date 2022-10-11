import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAccountComponent } from './dash-account.component';

describe('DashAccountComponent', () => {
  let component: DashAccountComponent;
  let fixture: ComponentFixture<DashAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

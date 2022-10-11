import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMsgComponent } from './dash-msg.component';

describe('DashMsgComponent', () => {
  let component: DashMsgComponent;
  let fixture: ComponentFixture<DashMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

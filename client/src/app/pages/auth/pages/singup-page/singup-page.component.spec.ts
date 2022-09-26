import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupPageComponent } from './singup-page.component';

describe('SingupPageComponent', () => {
  let component: SingupPageComponent;
  let fixture: ComponentFixture<SingupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

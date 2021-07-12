import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpfsetComponent } from './empfset.component';

describe('EmpfsetComponent', () => {
  let component: EmpfsetComponent;
  let fixture: ComponentFixture<EmpfsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpfsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpfsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

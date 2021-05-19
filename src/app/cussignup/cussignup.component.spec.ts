import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CussignupComponent } from './cussignup.component';

describe('CussignupComponent', () => {
  let component: CussignupComponent;
  let fixture: ComponentFixture<CussignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CussignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CussignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

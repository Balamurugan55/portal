import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscreditComponent } from './cuscredit.component';

describe('CuscreditComponent', () => {
  let component: CuscreditComponent;
  let fixture: ComponentFixture<CuscreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuscreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuscreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

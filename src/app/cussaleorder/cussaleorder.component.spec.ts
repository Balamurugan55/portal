import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CussaleorderComponent } from './cussaleorder.component';

describe('CussaleorderComponent', () => {
  let component: CussaleorderComponent;
  let fixture: ComponentFixture<CussaleorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CussaleorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CussaleorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

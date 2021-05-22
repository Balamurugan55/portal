import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuspayageComponent } from './cuspayage.component';

describe('CuspayageComponent', () => {
  let component: CuspayageComponent;
  let fixture: ComponentFixture<CuspayageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuspayageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuspayageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

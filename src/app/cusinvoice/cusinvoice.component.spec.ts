import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusinvoiceComponent } from './cusinvoice.component';

describe('CusinvoiceComponent', () => {
  let component: CusinvoiceComponent;
  let fixture: ComponentFixture<CusinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

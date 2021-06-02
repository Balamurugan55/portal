import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusmasupComponent } from './cusmasup.component';

describe('CusmasupComponent', () => {
  let component: CusmasupComponent;
  let fixture: ComponentFixture<CusmasupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusmasupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusmasupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

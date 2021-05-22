import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusoverallsalesComponent } from './cusoverallsales.component';

describe('CusoverallsalesComponent', () => {
  let component: CusoverallsalesComponent;
  let fixture: ComponentFixture<CusoverallsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusoverallsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusoverallsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

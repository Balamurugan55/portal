import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusdeliveryComponent } from './cusdelivery.component';

describe('CusdeliveryComponent', () => {
  let component: CusdeliveryComponent;
  let fixture: ComponentFixture<CusdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

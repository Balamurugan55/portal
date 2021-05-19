import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusdashboardComponent } from './cusdashboard.component';

describe('CusdashboardComponent', () => {
  let component: CusdashboardComponent;
  let fixture: ComponentFixture<CusdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

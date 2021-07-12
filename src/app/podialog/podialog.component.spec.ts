import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodialogComponent } from './podialog.component';

describe('PodialogComponent', () => {
  let component: PodialogComponent;
  let fixture: ComponentFixture<PodialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

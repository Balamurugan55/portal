import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelidialogComponent } from './delidialog.component';

describe('DelidialogComponent', () => {
  let component: DelidialogComponent;
  let fixture: ComponentFixture<DelidialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelidialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelidialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

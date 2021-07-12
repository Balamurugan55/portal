import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqdialogComponent } from './inqdialog.component';

describe('InqdialogComponent', () => {
  let component: InqdialogComponent;
  let fixture: ComponentFixture<InqdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

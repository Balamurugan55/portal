import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqdialogComponent } from './rfqdialog.component';

describe('RfqdialogComponent', () => {
  let component: RfqdialogComponent;
  let fixture: ComponentFixture<RfqdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfqdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

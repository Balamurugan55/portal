import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeninvComponent } from './veninv.component';

describe('VeninvComponent', () => {
  let component: VeninvComponent;
  let fixture: ComponentFixture<VeninvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeninvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeninvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

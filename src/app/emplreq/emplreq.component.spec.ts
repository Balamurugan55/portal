import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplreqComponent } from './emplreq.component';

describe('EmplreqComponent', () => {
  let component: EmplreqComponent;
  let fixture: ComponentFixture<EmplreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

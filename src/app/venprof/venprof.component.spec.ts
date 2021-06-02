import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenprofComponent } from './venprof.component';

describe('VenprofComponent', () => {
  let component: VenprofComponent;
  let fixture: ComponentFixture<VenprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

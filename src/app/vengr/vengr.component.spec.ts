import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VengrComponent } from './vengr.component';

describe('VengrComponent', () => {
  let component: VengrComponent;
  let fixture: ComponentFixture<VengrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VengrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VengrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

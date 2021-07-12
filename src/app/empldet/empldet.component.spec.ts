import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpldetComponent } from './empldet.component';

describe('EmpldetComponent', () => {
  let component: EmpldetComponent;
  let fixture: ComponentFixture<EmpldetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpldetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpldetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

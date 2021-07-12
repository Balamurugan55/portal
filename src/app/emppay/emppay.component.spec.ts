import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmppayComponent } from './emppay.component';

describe('EmppayComponent', () => {
  let component: EmppayComponent;
  let fixture: ComponentFixture<EmppayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmppayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmppayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

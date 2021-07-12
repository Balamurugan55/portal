import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifypoComponent } from './notifypo.component';

describe('NotifypoComponent', () => {
  let component: NotifypoComponent;
  let fixture: ComponentFixture<NotifypoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifypoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifypoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

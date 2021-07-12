import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsaleorderComponent } from './dialogsaleorder.component';

describe('DialogsaleorderComponent', () => {
  let component: DialogsaleorderComponent;
  let fixture: ComponentFixture<DialogsaleorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsaleorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsaleorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

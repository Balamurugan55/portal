import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogemppayComponent } from './dialogemppay.component';

describe('DialogemppayComponent', () => {
  let component: DialogemppayComponent;
  let fixture: ComponentFixture<DialogemppayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogemppayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogemppayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

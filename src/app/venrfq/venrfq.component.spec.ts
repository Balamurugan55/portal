import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenrfqComponent } from './venrfq.component';

describe('VenrfqComponent', () => {
  let component: VenrfqComponent;
  let fixture: ComponentFixture<VenrfqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenrfqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenrfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

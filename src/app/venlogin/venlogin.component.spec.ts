import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenloginComponent } from './venlogin.component';

describe('VenloginComponent', () => {
  let component: VenloginComponent;
  let fixture: ComponentFixture<VenloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

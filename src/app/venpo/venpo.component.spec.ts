import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenpoComponent } from './venpo.component';

describe('VenpoComponent', () => {
  let component: VenpoComponent;
  let fixture: ComponentFixture<VenpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

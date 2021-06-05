import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenpayageComponent } from './venpayage.component';

describe('VenpayageComponent', () => {
  let component: VenpayageComponent;
  let fixture: ComponentFixture<VenpayageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenpayageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenpayageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencredComponent } from './vencred.component';

describe('VencredComponent', () => {
  let component: VencredComponent;
  let fixture: ComponentFixture<VencredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VencredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

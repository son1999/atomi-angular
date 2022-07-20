import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSecondComponent } from './layout-second.component';

describe('LayoutSecondComponent', () => {
  let component: LayoutSecondComponent;
  let fixture: ComponentFixture<LayoutSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

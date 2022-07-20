import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutThirdComponent } from './layout-third.component';

describe('LayoutThirdComponent', () => {
  let component: LayoutThirdComponent;
  let fixture: ComponentFixture<LayoutThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

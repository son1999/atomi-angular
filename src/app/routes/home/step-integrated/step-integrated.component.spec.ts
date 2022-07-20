import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIntegratedComponent } from './step-integrated.component';

describe('StepIntegratedComponent', () => {
  let component: StepIntegratedComponent;
  let fixture: ComponentFixture<StepIntegratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepIntegratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIntegratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentIntegratedComponent } from './environment-integrated.component';

describe('EnvironmentIntegratedComponent', () => {
  let component: EnvironmentIntegratedComponent;
  let fixture: ComponentFixture<EnvironmentIntegratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentIntegratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentIntegratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

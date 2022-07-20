import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmChangeComponent } from './confirm-change.component';

describe('ConfirmChangeComponent', () => {
  let component: ConfirmChangeComponent;
  let fixture: ComponentFixture<ConfirmChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

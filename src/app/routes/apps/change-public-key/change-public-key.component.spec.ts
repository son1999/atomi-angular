import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePublicKeyComponent } from './change-public-key.component';

describe('ChangePublicKeyComponent', () => {
  let component: ChangePublicKeyComponent;
  let fixture: ComponentFixture<ChangePublicKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePublicKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePublicKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

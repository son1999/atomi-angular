import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSecondComponent } from './footer-second.component';

describe('FooterSecondComponent', () => {
  let component: FooterSecondComponent;
  let fixture: ComponentFixture<FooterSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

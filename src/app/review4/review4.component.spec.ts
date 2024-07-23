import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4Component } from './review4.component';

describe('Review4Component', () => {
  let component: Review4Component;
  let fixture: ComponentFixture<Review4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

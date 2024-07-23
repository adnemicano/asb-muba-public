import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review5Component } from './review5.component';

describe('Review5Component', () => {
  let component: Review5Component;
  let fixture: ComponentFixture<Review5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Review5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review3Component } from './review3.component';

describe('Review3Component', () => {
  let component: Review3Component;
  let fixture: ComponentFixture<Review3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Review3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

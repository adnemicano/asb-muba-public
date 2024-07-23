import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjelasanModalComponent } from './penjelasan-modal.component';

describe('PenjelasanModalComponent', () => {
  let component: PenjelasanModalComponent;
  let fixture: ComponentFixture<PenjelasanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenjelasanModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjelasanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

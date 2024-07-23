import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHspkComponent } from './detail-hspk.component';

describe('DetailHspkComponent', () => {
  let component: DetailHspkComponent;
  let fixture: ComponentFixture<DetailHspkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHspkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHspkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

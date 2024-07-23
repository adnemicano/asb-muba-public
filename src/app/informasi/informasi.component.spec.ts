import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiComponent } from './informasi.component';

describe('InformasiCompponent', () => {
  let component: InformasiComponent;
  let fixture: ComponentFixture<InformasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBodaPage } from './detalle-boda.page';

describe('DetalleBodaPage', () => {
  let component: DetalleBodaPage;
  let fixture: ComponentFixture<DetalleBodaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleBodaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleBodaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaPage } from './portada.page';

describe('PortadaPage', () => {
  let component: PortadaPage;
  let fixture: ComponentFixture<PortadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

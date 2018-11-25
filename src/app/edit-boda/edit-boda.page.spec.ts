import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBodaPage } from './edit-boda.page';

describe('EditBodaPage', () => {
  let component: EditBodaPage;
  let fixture: ComponentFixture<EditBodaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBodaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBodaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

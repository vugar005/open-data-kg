/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrgContactInsertComponent } from './org-contact-insert.component';

describe('OrgContactInsertComponent', () => {
  let component: OrgContactInsertComponent;
  let fixture: ComponentFixture<OrgContactInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgContactInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgContactInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

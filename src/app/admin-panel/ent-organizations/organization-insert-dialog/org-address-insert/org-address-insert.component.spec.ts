/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrgAddressInsertComponent } from './org-address-insert.component';

describe('OrgAddressInsertComponent', () => {
  let component: OrgAddressInsertComponent;
  let fixture: ComponentFixture<OrgAddressInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgAddressInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAddressInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

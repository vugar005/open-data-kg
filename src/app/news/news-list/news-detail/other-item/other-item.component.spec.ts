/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OtherItemComponent } from './other-item.component';

describe('OtherItemComponent', () => {
  let component: OtherItemComponent;
  let fixture: ComponentFixture<OtherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

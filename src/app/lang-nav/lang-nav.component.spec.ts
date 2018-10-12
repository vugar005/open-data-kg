/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LangNavComponent } from './lang-nav.component';

describe('LangNavComponent', () => {
  let component: LangNavComponent;
  let fixture: ComponentFixture<LangNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

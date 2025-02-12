/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightAsideComponent } from './right-aside.component';

describe('RightAsideComponent', () => {
  let component: RightAsideComponent;
  let fixture: ComponentFixture<RightAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MouseScrollIconComponent } from './mouse-scroll-icon.component';

describe('MouseScrollIconComponent', () => {
  let component: MouseScrollIconComponent;
  let fixture: ComponentFixture<MouseScrollIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseScrollIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseScrollIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FethAllJoinComponent } from './FethAllJoin.component';

describe('FethAllJoinComponent', () => {
  let component: FethAllJoinComponent;
  let fixture: ComponentFixture<FethAllJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FethAllJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FethAllJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

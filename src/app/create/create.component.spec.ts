/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CreateComponent } from './create.component';

describe('Component: Create', () => {
  it('should create an instance', () => {
    let component = new CreateComponent();
    expect(component).toBeTruthy();
  });
});

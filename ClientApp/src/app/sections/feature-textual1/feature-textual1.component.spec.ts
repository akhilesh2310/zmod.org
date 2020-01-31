import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTextual1Component } from './feature-textual1.component';

describe('FeatureTextual1Component', () => {
  let component: FeatureTextual1Component;
  let fixture: ComponentFixture<FeatureTextual1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTextual1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTextual1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

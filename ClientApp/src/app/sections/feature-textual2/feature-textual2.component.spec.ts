import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTextual2Component } from './feature-textual2.component';

describe('FeatureTextual2Component', () => {
  let component: FeatureTextual2Component;
  let fixture: ComponentFixture<FeatureTextual2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTextual2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTextual2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

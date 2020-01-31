import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-textual1',
  templateUrl: './feature-textual1.component.html',
  styleUrls: ['./feature-textual1.component.scss']
})
export class FeatureTextual1Component implements OnInit {
  @Input() dataSource: any;
  @Input() cssClass: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-textual2',
  templateUrl: './feature-textual2.component.html',
  styleUrls: ['./feature-textual2.component.scss']
})
export class FeatureTextual2Component implements OnInit {
  @Input() dataSource;
  @Input() cssClass;


  constructor() { }

  ngOnInit() {
  }

}

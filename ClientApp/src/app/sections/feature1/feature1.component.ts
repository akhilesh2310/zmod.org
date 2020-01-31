import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements OnInit {

  @Input() dataSource: any;
  @Input() cssClass: any;

  constructor() { }

  ngOnInit() {
  }

}

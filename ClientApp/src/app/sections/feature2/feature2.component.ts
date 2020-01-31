import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component implements OnInit {
  @Input() dataSource: any;
  @Input() cssClass: any;

  constructor() { }

  ngOnInit() {
  }

}

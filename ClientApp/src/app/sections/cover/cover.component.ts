import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input() dataSource: any;
  @Input() cssClass: any;
  constructor() { }

  ngOnInit() {
  }

}

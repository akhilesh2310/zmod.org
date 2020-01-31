import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover-header',
  templateUrl: './cover-header.component.html',
  styleUrls: ['./cover-header.component.scss']
})
export class CoverHeaderComponent implements OnInit {
  @Input() dataSource;
  constructor() { }

  ngOnInit() {
  }

}

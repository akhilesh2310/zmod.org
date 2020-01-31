import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() dataSource: any;
  @Input() cssClass: String;
  constructor() { }

  ngOnInit() {
  }

}

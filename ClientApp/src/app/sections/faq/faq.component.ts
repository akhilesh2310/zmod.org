import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() dataSource: any;
  constructor() { }

  ngOnInit() {
  }

}

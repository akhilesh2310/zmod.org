import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public ctaDataSource = {
    'heading': 'Get It Now',
    'description': 'We waited until we could do it right. Then we did! Instead of creating a carbon copy.',
    'btn_text': 'Try it now',
    'small_text': 'ML Workbench'
  };
  constructor() { }

  ngOnInit() {
  }

}

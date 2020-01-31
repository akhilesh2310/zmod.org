import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'ML Workbench',
    'description': 'Getting started and using our product is easy peasy!'
  };
  constructor() { }

  ngOnInit() {
  }

}

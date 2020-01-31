import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'ML Workbench',
    'description': 'Getting started and using our product is easy peasy!'
  };
  public pricingDataSource: any = {
    'heading': 'Choose your perfect plan',
    'description': 'Wont said night above you are she would behold moveth said one fowl.',
    'list': [
      {
        'heading': 'SINGLE',
        'subHeading': 'free',
        'description1': '30 days free trial',
        'description2': 'Basic support',
        'description3': '1 GB attachment',
        'buttondesc': 'GET STARTED'
      },
      {
        'heading': 'STUDIO',
        'subHeading': '$ 39',
        'text': 'Billed monthly',
        'description1': '30 days free trial',
        'description2': 'Ticket support',
        'description3': '100 GB attachments',
        'buttondesc': 'GET STARTED'
      },
      {
        'heading': 'BUSINESS',
        'subHeading': '$ 69',
        'text': 'Billed monthly',
        'description1': '30 days free trial',
        'description2': 'Call support',
        'description3': 'Unlimited attachments',
        'buttondesc': 'GET STARTED'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}

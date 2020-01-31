import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'ML Workbench Architecture Guides',
    'description': 'Getting started and using our product is easy peasy!'
  };
  public textual1DataSource: any = {

    'heading': 'So Intuitive, So Easy',
    'description': 'We are so proud of our product. It is really easy to create a landing page for your product.',
    'list': [
      {
        'heading': 'Responsive',
        'icon': 'fa fa-pencil-square-o',
        'description': 'Your landing page displays smoothly on any device: desktop, tablet or mobile.'
      },
      {
        'heading': 'Step Two',
        'icon': 'fa fa-pencil-square-o',
        'description': 'Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.'
      },
      {
        'heading': 'Step Three',
        'icon': 'fa fa-pencil-square-o',
        'description': 'Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.'
      },
      {
        'heading': 'Step One',
        'icon': 'fa fa-pencil-square-o',
        'description': 'Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.'
      },
      {
        'heading': 'Step Two',
        'icon': 'fa fa-pencil-square-o',
        'description': 'Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.'
      },
      {
        'heading': 'Step Three',
        'icon': 'fa fa-pencil-square-o',
        'description': 'Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.'
      },

    ]
  };
  public textual2DataSource: any = {

    'heading': 'More Than You Think',
    'description': 'We are so excited and proud of our product. Its really easy to create a landing page for your awesome product.',
    'list': [
      {
        'heading': 'Be The First',
        'image_url': '../../../assets/planet.png',
        'description': 'Your landing page displays smoothly on any device: desktop, tablet or mobile.'
      },
      {
        'heading': 'Step Two',
        'image_url': '../../../assets/rocket.png',
        'description': 'Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.'
      },
      {
        'heading': 'Step Three',
        'image_url': '../../../assets/dog.png',
        'description': 'Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.'
      },


    ]
  };
  public feature2DataSource: any = {
    'heading': 'A dashboard with metrics',
    'description': 'Mountains in the not respect prior the brown must loyalty Terms sides house.  english too.',
    'image_url': '../../../assets/ipad-1.png',
    'url': 'https://lambda-quad/'
  };
  constructor() { }

  ngOnInit() {
  }

}

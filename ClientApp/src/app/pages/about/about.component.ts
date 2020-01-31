import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'What is ML Workbench?',
    'description': 'For experts or beginner, ML Workbench is an end-to-end platform that makes it easy to build and deploy AI/ML models.'
  };


  public feature1DataSource: any = {
    'heading': 'Perfect for Interactive model building',
    'description': 'We are so proud of our product. It is really easy to do model building and deploy.',
    'image_url': 'assets/zmod_models.png',
    'list': [
      {
        'heading': 'Drag and Drop',
        'icon': 'fa fa-external-link fa-2x fa-check text-primary mb-4',
        'description': 'Drag and Drop layers or templates to build models.'
      },
      {
        'heading': 'Support',
        'icon': 'fa fa-headphones fa-2x fa-check text-primary mb-4',
        'description': 'Support for extensive model building elements.'
      },
      {
        'heading': 'Pre-built templates',
        'icon': 'fa fa-newspaper-o fa-2x fa-check text-primary mb-4',
        'description': 'Pre-built templates for transfer learning.'
      },
      {
        'heading': 'Tensorboard',
        'icon': 'fa fa-line-chart fa-2x fa-check text-primary mb-4',
        'description': 'Tensorboard integrated for real time progress.'
      }
    ]
  };
  public feature3DataSource: any = {
    'heading': 'AutoML: Machine learning models',
    'description': '',
    'image_url': 'assets/zmod_automl.png',
    'btn': {
      text: 'Learn More',
      link: '/learn'
    },
    'list': [
      {
        'heading': 'Automated machine learning model building tool',
        'icon': 'fa fa-check-square-o fa fa text-primary ',
      },
      {
        'heading': 'Auto search best model and hyper-parameter tuning',
        'icon': 'fa fa-check-square-o fa fa text-primary ',
      },
      {
        'heading': 'Provides ready to deploy models',
        'icon': 'fa fa-check-square-o fa fa text-primary ',
      },
      {
        'heading': 'Easy to use UI for preprocessing steps',
        'icon': 'fa fa-check-square-o fa fa text-primary ',
      },
    ]
  };

  public feature2DataSource: any = {
    'heading': 'A dashboard with metrics',
    'description': 'Mountains in the not respect prior the brown must loyalty Terms sides house.  english too.',
    'image_url': 'assets/zmod_automl.png',
    'url': 'https://lambda-quad/'
  };
  constructor() { }

  ngOnInit() {
  }

}

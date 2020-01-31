import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public coverDataSource: any = {
    'heading': 'MACHINE LEARNING WORKBENCH',
    'description': '',
    //'description': 'ML Workbench is an open source cloud based Deep Neural network and machine learning model building tool, which enables Data Scientist to work faster and quicker to build prototypes and convert them to actual project.',
    'image_url': 'assets/zmod_editor.png',
    'video_url': '',
    'btn_list':
      [
        {
          'name': 'Get Started',
          'cssClass': 'btn-outline-primary',
          'link': ''
        },
        {
          'name': 'Download',
          'cssClass': 'btn-success',
          'link': ''
        }
      ]
  };

  public aboutDataSource: any = {
    'heading': 'Why ML Workbench?',
    'description': 'ML Workbench is an open source machine learning and artificial intelligence platform for Data Scientist to solve business problems faster and quicker, build prototypes and convert them to actual project.',
    'btn': {
      text: 'About Us',
      link: '/about'
    }
  };

  public contentDataSource: any = {
    'heading': 'ML Workbench Offerings (Features)',
    'description': '',
    'image_url': '',
    'list': [
      {
        'icon': 'fa fa-users alert alert-success lead  p-4 rounded-circle text-success',
        'heading': 'Interactive Deep Network Editor and Training',
        'description': 'Use the intuitive drag and drop Editor to build your wonderful Network and train on the fly.'
      },
      {
        'icon': 'fa fa-laptop alert alert-dark lead  p-4 rounded-circle text-dark',
        'heading': 'Build Automated Machine Learning Model',
        'description': 'Build your ML models with ease using AutoML tool, which looks in all the space to get you the best for your data.'
      },
      {
        'icon': 'fa fa-code alert alert-primary lead  p-4 rounded-circle text-primary',
        'heading': 'PMML Nyoka',
        'description': 'We support PMML, we use NYOKA to generate models in PMML format.'
      },
      {
        'icon': 'fa fa-handshake-o alert alert-danger lead  p-4 rounded-circle text-danger',
        'heading': 'Open Source',
        'description': 'We believe in Open Source, it’s free for everyone to collaborate and improve the technology.'
      },
      {
        'icon': 'fa fa-cogs alert alert-info lead  p-4 rounded-circle text-info',
        'heading': 'Deploy and Serve',
        'description': 'Deploy and Serve your model to integrate it with your applications using REST APIs.'
      },
      {
        'icon': 'fa fa-weixin alert alert-warning lead  p-4 rounded-circle text-warning',
        'heading': 'Community Support',
        'description': 'If any query, connect us in Github, DockerHub and Stack-Overflow.'
      }
    ]
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
    'description': 'Mountains in the not respect prior the brown must loyalty Terms sides house.  english too.',
    'image_url': 'assets/zmod_automl.png',
    'url': '/learn',
    'list': [
      {
        'heading': 'Automated machine learning model building tool',
        'icon': 'fa fa-check-square-o',
      },
      {
        'heading': 'Auto search best model and hyper-parameter tuning',
        'icon': 'fa fa-check-square-o',
      },
      {
        'heading': 'Provides ready to deploy models',
        'icon': 'fa fa-check-square-o',
      },
      {
        'heading': 'Easy to use UI for preprocessing steps',
        'icon': 'fa fa-check-square-o',
      },
    ]
  };
  public videoDataSource: any = {
    'heading': 'Recent Video Tutorials',
    'description': 'We are so excited and proud of our product. It is really easy to use ML Workbench.',
    'btn': {
      text: 'View All',
      link: '/learn'
    },
    'list': [
      {
        'video_url': 'https://www.youtube.com/embed/0SZHvRSJwyc?rel=0',
        'description': 'Distracted Driver use-case',
        'subheading': 'Use Cases',
        'id': `0SZHvRSJwyc`
      },
      {
        'video_url': 'https://www.youtube.com/embed/6RUJ0Nk52u8?rel=0',
        'description': 'ML Workbench - AutoML',
        'subheading': 'Use Cases',
        'id': `6RUJ0Nk52u8`
      },
      {
        'video_url': 'https://www.youtube.com/embed/_YCGPhMETF4?rel=0',
        'description': 'Import data from Cumulocity',
        'subheading': 'Use Cases',
        'id': `_YCGPhMETF4`
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}

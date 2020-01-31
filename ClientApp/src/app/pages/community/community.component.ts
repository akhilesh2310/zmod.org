import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'ML Workbench Developer Community',
    'description': 'If any query, connect us in Github, DockerHub and Stack-Overflow.'
  };
  public textual1DataSource: any = {

    'heading': 'So Intuitive, So Easy',
    'description': 'We are so proud of our product. It is really easy to connect with us in Github, DockerHub and Stack-Overflow.',
    'list': [
      {
        'heading': 'Github',
        'icon': 'fa fa-github fa-3x fa-check text-primary',
        'description': `The official home of MLW on GitHub. It's a great starting point to find many MLW project from SoftwareAg and the community.`,
        'link': 'https://github.com/SoftwareAG/MLW'
      },
      {
        'heading': 'DockerHub',
        'icon': 'fa fa-file-text-o fa-3x fa-check text-primary',
        'description': 'Official Software AG ML Workbench images',
        'link': 'https://hub.docker.com/_/softwareag-zmod'
      },
      {
        'heading': 'Stack Overflow',
        'icon': 'fa fa-stack-overflow fa-3x fa-check text-primary',
        'description': 'StackOverflow is one of the most used sites for asking general purpose programming questions, and there are a lot of great answers to MLW questions already.',
        'link': 'https://stackoverflow.com/search?q=MLW'
      }
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
    'heading': 'Learn & Share Something New',
    'description': '   The latest development and design tips, tools, and projects from our developer community.',
    'image_url': '/assets/meetup.svg',
    'url': ''
  };
  constructor() { }

  ngOnInit() {
  }

}

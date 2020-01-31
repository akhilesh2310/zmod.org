import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'Learn ML Workbench',
    'description': 'Getting started and using our product is easy peasy!'
  };
  public videoDataSource: any = {
    'heading': 'Video Tutorials',
    'description': 'We are so excited and proud of our product. It is really easy to use ML Workbench.',
    'list': [
      {
        'video_url': 'https://www.youtube.com/embed/0SZHvRSJwyc?rel=0',
        'description': 'Distracted Driver Use Case',
        'subheading': 'Use Cases',
        'id': `0SZHvRSJwyc`
      },
      {
        'video_url': 'https://www.youtube.com/embed/6RUJ0Nk52u8?rel=0',
        'description': 'AutoML',
        'subheading': 'Use Cases',
        'id': `6RUJ0Nk52u8`
      },
      {
        'video_url': 'https://www.youtube.com/embed/_YCGPhMETF4?rel=0',
        'description': 'Import data from Cumulocity',
        'subheading': 'Use Cases',
        'id': `_YCGPhMETF4`
      },
      {
        'video_url': 'https://www.youtube.com/embed/dm98Rjb8l6w?rel=0',
        'description': 'Jupyter Notebook',
        'subheading': 'Use Cases',
        'id': `dm98Rjb8l6w`
      },
      {
        'video_url': 'https://www.youtube.com/embed/Hnu7lvcc0kc?rel=0',
        'description': 'Python Execution',
        'subheading': 'Use Cases',
        'id': `Hnu7lvcc0kc`
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}

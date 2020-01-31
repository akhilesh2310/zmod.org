import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'ML Workbench',
    'description': 'Getting started and using our product is easy peasy!'
  };
  public processDataSource: any = {
    'heading': 'How Does It Work?',
    'description': 'Explore the best product in the market in a short 1-minute video.',
    'list': [
      {
        'heading': '01',
        'subHeading': 'Write your requirements',
        // tslint:disable-next-line:max-line-length
        'description': 'Think the organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.',
        'image_url': '../../../assets/process1.png'
      },
      {
        'heading': '02',
        'subHeading': 'Sign the contract',
        // tslint:disable-next-line:max-line-length
        'description': 'Think the organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.',
        'image_url': '../../../assets/process2.png'
      },
      {
        'heading': '03',
        'subHeading': 'We start developing',
        // tslint:disable-next-line:max-line-length
        'description': 'Think the organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.',
        'image_url': '../../../assets/process3.png'
      },
      {
        'heading': '04',
        'subHeading': 'Customer support begins',
        // tslint:disable-next-line:max-line-length
        'description': '3Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.',
        'image_url': '../../../assets/process4.png'
      }]
  };
  constructor() { }

  ngOnInit() {
  }

}

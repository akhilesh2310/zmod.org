import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'Frequently Asked Questions',
    'description': 'Getting started and using our product is easy peasy!'
  };
  public faqDataSource = [
    {
      'question': 'Is this a secure site for purchases?',
      'answer': 'Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.'
    },
    {
      'question': 'How long are your contracts?',
      'answer': 'Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.'
    },
    {
      'question': 'Can I cancel my subscription?',
      'answer': 'You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.'
    },
    {
      'question': 'Can I request refund?',
      'answer': 'Unfortunately, not. We do not issue full or partial refunds for any reason.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

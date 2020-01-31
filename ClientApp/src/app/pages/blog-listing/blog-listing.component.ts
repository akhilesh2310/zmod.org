import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss']
})
export class BlogListingComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'ML Workbench Blogs',
    'description': `For experts or beginner, ML Workbench is an end-to-end platform that makes
    it easy to build and deploy AI/ML models.`
  };
  public blogDataSource: any = {
    heading: 'Latest Articles',
    list: [
      {
        url: 'new-ai-ml-pyramid-recurrent-netowrk',
        title: 'New AI ML: Pyramid Recurrent Network improves Time Series prediction',
// tslint:disable-next-line: max-line-length
        short_description: `Today, I want to draw your attention to a paper, proposing Pyramid Recurrent Neural Network, a novel approach to apply Deep Learning...`,
        thumbnail: 'assets/blog/1.png',
        thumbnail_alt_text: 'Pyramid Recurrent Network'
      },
      {
        url: 'new-ai-ml-you-are-being-watched',
        title: 'New AI ML: "You are being watched ..."',
// tslint:disable-next-line: max-line-length
        short_description: `Just like plotted in George Orwell's legendary (or rather ... at least in parts ... visionary) book 1984, the TV show Person of Interest...`,
        thumbnail: 'assets/blog/2.jfif',
        thumbnail_alt_text: 'You are being watched'
      },
      {
        url: 'new-ai-ml-embarrassingly',
        title: 'New AI ML: ... embarrassingly ...',
// tslint:disable-next-line: max-line-length
        short_description: `AI and Machine Learning is progressing fast - one indicator are papers published. In this series of articles I briefly touch new papers...`,
        thumbnail: 'assets/blog/3.jfif',
        thumbnail_alt_text: 'New AI ML Embarrassingly'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}

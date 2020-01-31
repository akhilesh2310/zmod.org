import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Feature2Component } from './feature2/feature2.component';
import { Feature3Component } from './feature3/feature3.component';
import { FeatureTextual2Component } from './feature-textual2/feature-textual2.component';
import { Feature1Component } from './feature1/feature1.component';
import { FeatureTextual1Component } from './feature-textual1/feature-textual1.component';
import { VideoComponent } from './video/video.component';
import { CoverComponent } from './cover/cover.component';
import { ContentComponent } from './content/content.component';
import { ProcessComponent } from './process/process.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { CtaComponent } from './cta/cta.component';
import {SharedModule } from '../shared/shared.module';
import { DownloadComponent } from './download/download.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoverHeaderComponent } from './cover-header/cover-header.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Feature2Component,
    Feature3Component,
    FeatureTextual2Component,
    Feature1Component,
    FeatureTextual1Component,
    CoverComponent,
    VideoComponent,
    ContentComponent,
    ProcessComponent,
    PricingComponent,
    FaqComponent,
    CtaComponent,
    DownloadComponent,
    ContactMapComponent,
    ContactFormComponent,
    CoverHeaderComponent,
    SubscribeComponent,
    BlogComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeatureTextual1Component,
    Feature1Component,
    Feature2Component,
    Feature3Component,
    FeatureTextual2Component,
    VideoComponent,
    CoverComponent,
    ContentComponent,
    ProcessComponent,
    PricingComponent,
    FaqComponent,
    CtaComponent,
    DownloadComponent,
    ContactMapComponent,
    ContactFormComponent,
    CoverHeaderComponent,
    SubscribeComponent,
    BlogComponent
  ]
})
export class SectionsModule { }

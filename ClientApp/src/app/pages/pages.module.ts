import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsModule } from '../sections/sections.module';
import { PagesRouting } from './pages.routing';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from './../shared';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { LearnComponent } from './learn/learn.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { CommunityComponent } from './community/community.component';
import { LearnMoreComponent } from './learn/learn-more/learn-more.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { BlogDetailsComponent } from './blog-listing/blog-details/blog-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    PagesComponent,
    FaqsComponent,
    TermsConditionComponent,
    PrivacyComponent,
    AboutComponent,
    HowItWorksComponent,
    PricingPageComponent,
    LearnComponent,
    ArchitectureComponent,
    CommunityComponent,
    LearnMoreComponent,
    BlogListingComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    PagesRouting,
    SharedModule
  ]
})
export class PagesModule { }

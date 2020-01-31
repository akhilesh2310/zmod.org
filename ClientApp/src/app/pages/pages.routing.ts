import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { LearnComponent } from './learn/learn.component';
import { LearnMoreComponent } from './learn/learn-more/learn-more.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { CommunityComponent } from './community/community.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { BlogDetailsComponent } from './blog-listing/blog-details/blog-details.component';

const MAIN_ROUTES: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'contact', component: ContactUsComponent },
            { path: 'faq', component: FaqsComponent },
            { path: 'terms', component: TermsConditionComponent },
            { path: 'privacy', component: PrivacyComponent },
            { path: 'about', component: AboutComponent },
            { path: 'pricing', component: PricingPageComponent },
            { path: 'how-it-works', component: HowItWorksComponent },
            { path: 'learn', component: LearnComponent },
            { path: 'learn/:id', component: LearnMoreComponent },
            { path: 'architecture', component: ArchitectureComponent },
            { path: 'community', component: CommunityComponent },
            { path: 'blog', component: BlogListingComponent },
            { path: 'blog/:id', component: BlogDetailsComponent },
            { path: '**', redirectTo: '' }
        ]
    }
];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(MAIN_ROUTES);

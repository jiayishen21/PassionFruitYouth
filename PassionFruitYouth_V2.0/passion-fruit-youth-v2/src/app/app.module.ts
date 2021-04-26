import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { QuotationComponent } from '../components/quotation/quotation.component';
import { Quote1Component } from '../components/quote1/quote1.component';
import { PotterChildComponent } from '../components/potter-child/potter-child.component';
import { LearnMoreComponent } from '../components/learn-more/learn-more.component';
import { DescriptionpageComponent } from '../components/descriptionpage/descriptionpage.component';
import { Quote2Component } from '../components/quote2/quote2.component';
import { ArtistComponent } from '../components/artist/artist.component';
import { CommunityDescriptionComponent } from '../components/community-description/community-description.component';
import { OpportunitiesButtonComponent } from '../components/opportunities-button/opportunities-button.component';
import { EventsButtonComponent } from '../components/events-button/events-button.component';
import { PhotographerComponent } from '../components/photographer/photographer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    QuotationComponent,
    Quote1Component,
    PotterChildComponent,
    LearnMoreComponent,
    DescriptionpageComponent,
    Quote2Component,
    ArtistComponent,
    CommunityDescriptionComponent,
    OpportunitiesButtonComponent,
    EventsButtonComponent,
    PhotographerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

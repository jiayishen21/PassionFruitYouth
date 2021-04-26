import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DescriptionpageComponent } from './descriptionpage.component';
import { Quote2Component } from '../quote2/quote2.component';
import { ArtistComponent } from '../artist/artist.component';
import { CommunityDescriptionComponent } from '../community-description/community-description.component';
import { OpportunitiesButtonComponent } from '../opportunities-button/opportunities-button.component';
import { EventsButtonComponent } from '../events-button/events-button.component';
import { PhotographerComponent } from '../photographer/photographer.component';

@NgModule({
  declarations: [
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
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
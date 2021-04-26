import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DescriptionPageComponent } from './description-page.component';
import { OpportunitiesButtonComponent } from '../opportunities-button/opportunities-button.component';
import { EventsButtonComponent } from '../events-button/events-button.component';

@NgModule({
  declarations: [
    DescriptionPageComponent, 
    OpportunitiesButtonComponent,
    EventsButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { OpportunitiesComponent } from '../components/opportunities/opportunities.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { BusinessPageComponent } from '../components/business-page/business-page.component';
import { OpportunityCardComponent } from '../components/opportunity-card/opportunity-card.component';
import { CardOrganizerComponent } from '../components/card-organizer/card-organizer.component';
import { EventsComponent } from '../components/events/events.component';
import { FooterComponent } from '../components/footer/footer.component';

//Need to resave each time there is a new component
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OpportunitiesComponent,
    NotFoundComponent,
    BusinessPageComponent,
    OpportunityCardComponent,
    CardOrganizerComponent,
    EventsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'opportunities', 
        component: OpportunitiesComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

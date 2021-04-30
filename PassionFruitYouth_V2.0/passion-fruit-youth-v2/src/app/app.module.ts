import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { LearnMoreComponent } from '../components/learn-more/learn-more.component';
import { OpportunitiesButtonComponent } from '../components/opportunities-button/opportunities-button.component';
import { EventsButtonComponent } from '../components/events-button/events-button.component';
import { ClassroomTransitionComponent } from '../components/classroom-transition/classroom-transition.component';
import { MotivationPageComponent } from '../components/motivation-page/motivation-page.component';
import { DescriptionPageComponent } from '../components/description-page/description-page.component';
import { HomeComponent } from '../components/home/home.component';
import { OpportunitiesComponent } from '../components/opportunities/opportunities.component';
import { SelectionPageComponent } from '../components/selection-page/selection-page.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { BusinessPageComponent } from '../components/business-page/business-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LearnMoreComponent,
    OpportunitiesButtonComponent,
    EventsButtonComponent,
    ClassroomTransitionComponent,
    MotivationPageComponent,
    DescriptionPageComponent,
    HomeComponent,
    OpportunitiesComponent,
    SelectionPageComponent,
    NotFoundComponent,
    MusicPageComponent,
    BusinessPageComponent
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
        path: '**',
        component: NotFoundComponent
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

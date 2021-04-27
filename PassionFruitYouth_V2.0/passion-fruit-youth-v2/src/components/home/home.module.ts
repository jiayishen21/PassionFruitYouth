import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { LearnMoreComponent } from '../learn-more/learn-more.component';
import { OpportunitiesButtonComponent } from '../opportunities-button/opportunities-button.component';
import { EventsButtonComponent } from '../events-button/events-button.component';
import { ClassroomTransitionComponent } from '../classroom-transition/classroom-transition.component';
import { MotivationPageComponent } from '../motivation-page/motivation-page.component';
import { DescriptionPageComponent } from '../description-page/description-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    LearnMoreComponent,
    OpportunitiesButtonComponent,
    EventsButtonComponent,
    ClassroomTransitionComponent,
    MotivationPageComponent,
    HomePageComponent,
    DescriptionPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
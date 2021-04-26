import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    HomePageComponent,
    DescriptionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

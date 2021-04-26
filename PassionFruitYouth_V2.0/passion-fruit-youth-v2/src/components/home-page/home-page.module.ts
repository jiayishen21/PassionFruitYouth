import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomePageComponent } from './home-page.component';
import { LearnMoreComponent } from '../learn-more/learn-more.component';

@NgModule({
  declarations: [
    HomePageComponent, 
    LearnMoreComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
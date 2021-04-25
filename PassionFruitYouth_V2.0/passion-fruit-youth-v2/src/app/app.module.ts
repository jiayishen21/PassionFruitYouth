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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    QuotationComponent,
    Quote1Component,
    PotterChildComponent,
    LearnMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

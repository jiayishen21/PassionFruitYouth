import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage.component';
import { QuotationComponent } from '../quotation/quotation.component';
import { Quote1Component } from '../quote1/quote1.component';
import { LearnMoreComponent } from '../learn-more/learn-more.component';
import { PotterChildComponent } from '../potter-child/potter-child.component';

@NgModule({
  declarations: [
    HomepageComponent, 
    QuotationComponent,
    Quote1Component,
    LearnMoreComponent,
    PotterChildComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
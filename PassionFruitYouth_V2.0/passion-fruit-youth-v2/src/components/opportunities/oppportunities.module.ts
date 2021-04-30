import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { OpportunitiesComponent } from './opportunities.component';

@NgModule({
  declarations: [
    OpportunitiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OpportunitiesComponent]
})
export class AppModule { }
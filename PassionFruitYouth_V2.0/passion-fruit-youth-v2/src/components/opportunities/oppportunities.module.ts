import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { OpportunitiesComponent } from './opportunities.component';
import { SelectionPageComponent } from '../../app/selection-page/selection-page.component';

@NgModule({
  declarations: [
    OpportunitiesComponent,
    SelectionPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OpportunitiesComponent]
})
export class AppModule { }
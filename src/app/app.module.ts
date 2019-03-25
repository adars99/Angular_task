import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { TableComponent } from './table/table.component';
import {IntegrationService} from '../services/IntegrationService';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

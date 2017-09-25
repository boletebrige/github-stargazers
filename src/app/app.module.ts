import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import HttpModule from @angular/common/http
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule, MdChipsModule, MdListModule, MdInputModule, MdToolbarModule, MdIconModule, MdTabsModule } from '@angular/material';
import { DatePipe } from '@angular/common';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { appHeader } from './layout/appHeader.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    appHeader,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    appRouting,
    MdButtonModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCardModule,
    MdGridListModule,
    MdListModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

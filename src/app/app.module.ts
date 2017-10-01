import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import HttpModule from @angular/common/http
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule, MdChipsModule, MdListModule, MdInputModule, MdToolbarModule, MdIconModule, MdTabsModule, MdPaginatorModule, MdSnackBarModule, MdProgressSpinnerModule } from '@angular/material';
import { DatePipe } from '@angular/common';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { appHeader } from './layout/components/appHeader/appHeader.component';
import { AppFooter } from './layout/components/appFooter/appFooter.component';
import { HomeComponent } from './layout/home/home.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { GitCard } from './layout/components/gitCard/gitCard.component';
import { RepoInput } from './layout/components/repoInput/repoInput.component';


@NgModule({
  declarations: [
    AppComponent,
    appHeader,
    AppFooter,
    HomeComponent,
    GitCard,
    RepoInput,
    ProfileComponent
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
    MdTabsModule,
    MdPaginatorModule,
    MdSnackBarModule, 
    MdProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

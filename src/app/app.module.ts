import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdToolbarModule, MdButtonModule, MdIconModule, MdCardModule, MdChipsModule,
  MdGridListModule, MdSnackBarModule, MdInputModule, MdRadioModule, MdTooltipModule,
  MdListModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdChipsModule,
    MdGridListModule,
    MdSnackBarModule,
    MdInputModule,
    MdRadioModule,
    MdTooltipModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

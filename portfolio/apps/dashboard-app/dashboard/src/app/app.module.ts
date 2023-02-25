import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "@portfolio/material";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

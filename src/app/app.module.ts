import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FootballersApp } from './footballers-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    FootballersApp
  ],
  bootstrap: [FootballersApp]
})
export class AppModule { }

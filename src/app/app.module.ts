import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from '../app/routing/routing.module';

import { AppComponent } from './app.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HomeComponent } from './home/home.component';
import { PastTrialsComponent } from './past-trials/past-trials.component';
import { VotesComponent } from './votes/votes.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HowItWorksComponent,
    HomeComponent,
    PastTrialsComponent,
    VotesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

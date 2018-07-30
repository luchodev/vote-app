import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { HomeComponent } from '../home/home.component';
import { PastTrialsComponent } from '../past-trials/past-trials.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'past-trials',
    component: PastTrialsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }

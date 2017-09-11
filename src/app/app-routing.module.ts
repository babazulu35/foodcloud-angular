


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './route/index.component';

export const routes: Routes = [
  {
    path: '',redirectTo:'/profile',pathMatch: 'full',
  },
  {
    path:'profile', loadChildren:'app/module/order-profile/order-profile.module#OrderProfileModule'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }

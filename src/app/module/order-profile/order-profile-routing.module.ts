
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderProfileComponent } from './order-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'', component:OrderProfileComponent
      }
    ])
  ],
  exports:[RouterModule],
  declarations: []
})
export class OrderProfileRoutingModule { }

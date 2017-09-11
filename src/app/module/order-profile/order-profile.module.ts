

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderProfileComponent } from './order-profile.component';
import { OrderProfileRoutingModule } from './order-profile-routing.module';
import { OrderProfileService } from './service/order-profile.service';

@NgModule({
  imports: [
    CommonModule,
    OrderProfileRoutingModule
  ],
  declarations: [OrderProfileComponent],
  providers: [OrderProfileService]
})
export class OrderProfileModule { }

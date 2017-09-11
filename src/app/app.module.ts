import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderProfileModule } from './module/order-profile/order-profile.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './route/index.component';
import { HeaderComponent } from './shared/content/header.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

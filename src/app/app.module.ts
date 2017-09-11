import { HttpModule } from '@angular/http';
import { AuthenticationService } from './shared/services/authentication.service';
import { ResponseTimeInterceptor } from './shared/interceptors/response-time-interceptor';
import { FoodInterceptor } from './shared/interceptors/food-interceptor';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
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
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    OrderProfileModule
  ],
  providers: [AuthenticationService,{
    provide:HTTP_INTERCEPTORS,
    useClass: FoodInterceptor,
    multi:true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseTimeInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LogocompComponent } from './logocomp/logocomp.component';
import { DaashboardComponent } from './daashboard/daashboard.component';
import { SingleOrderComponent } from './single-order/single-order.component';
import { MultipleOrdersComponent } from './multiple-orders/multiple-orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DashboardinComponent } from './dashboardin/dashboardin.component';

@NgModule({
  declarations: [
    AppComponent,
    LogocompComponent,
    DaashboardComponent,
    SingleOrderComponent,
    MultipleOrdersComponent,
    NavBarComponent,
    HomeComponent,
    DashboardinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

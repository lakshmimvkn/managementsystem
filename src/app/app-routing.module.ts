import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent } from './home/home.component';
import{LogocompComponent} from './logocomp/logocomp.component';
import{DaashboardComponent} from './daashboard/daashboard.component';
import{SingleOrderComponent} from './single-order/single-order.component';
import{MultipleOrdersComponent} from './multiple-orders/multiple-orders.component';
import{DashboardinComponent } from './dashboardin/dashboardin.component';

const routes:Routes=[
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Logocomp',component:LogocompComponent},
  {path:'Daashboard',component:DaashboardComponent},
  {path:'Single-order',component:SingleOrderComponent},
  {path:'Multiple-orders',component:MultipleOrdersComponent},
  {path:'Dashboardin',component:DashboardinComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

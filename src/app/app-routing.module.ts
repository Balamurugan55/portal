import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CuscreditComponent } from './cuscredit/cuscredit.component';
import { CusdashboardComponent } from './cusdashboard/cusdashboard.component';
import { CusdeliveryComponent } from './cusdelivery/cusdelivery.component';
import { CusinvoiceComponent } from './cusinvoice/cusinvoice.component';
import { CusloginComponent } from './cuslogin/cuslogin.component';
import { CusmasupComponent } from './cusmasup/cusmasup.component';
import { CusoverallsalesComponent } from './cusoverallsales/cusoverallsales.component';
import { CuspayageComponent } from './cuspayage/cuspayage.component';
import { CusprofileComponent } from './cusprofile/cusprofile.component';
import { CussaleorderComponent } from './cussaleorder/cussaleorder.component';
import { CussideNavComponent } from './cusside-nav/cusside-nav.component';
import { CussignupComponent } from './cussignup/cussignup.component';
import { HomeComponent } from './home/home.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { VenauthGuard } from './venauth.guard';
import { VencredComponent } from './vencred/vencred.component';
import { VendashboardComponent } from './vendashboard/vendashboard.component';
import { VenloginComponent } from './venlogin/venlogin.component';
import { VenpayageComponent } from './venpayage/venpayage.component';
import { VenprofComponent } from './venprof/venprof.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"home/customer",
    component:CusloginComponent
  },
  {
    path:"home/vendor",
    component:VenloginComponent
  },
  {
    path:"home/customer/signup",
    component:CussignupComponent
  },
  {
    path:"home/test",
    component:CusdashboardComponent
  },
  {
    path:"home/vendor/vendashboard",
    component:VendashboardComponent,
    canActivate:[VenauthGuard],
    children:[
      {
        path:"venprof",
        component:VenprofComponent
      },{
        path:"vencred",
        component:VencredComponent
      },{
        path:"venpayage",
        component:VenpayageComponent
      }
    ]
  },
  {
    path:"home/customer/cusdashboard",
    component:CussideNavComponent,
    canActivate:[AuthGuard],
    children:[{
      path:"cusprofile",
      component:CusprofileComponent
    },{
      path:"inquiry",
      component:InquiryComponent
    },
  {
    path:"cussaleorder",
    component:CussaleorderComponent
  },{
    path:"cusdelivery",
    component:CusdeliveryComponent
  },{
    path:"cusinvoice",
    component:CusinvoiceComponent
  },{
    path:"cuscredit",
    component:CuscreditComponent
  },{
    path:"cuspayage",
    component:CuspayageComponent
  },{
    path:"cusoverallsales",
    component:CusoverallsalesComponent
  },{
    path:'cusmasup',
    component:CusmasupComponent
  }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

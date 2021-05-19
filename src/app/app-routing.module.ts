import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CusdashboardComponent } from './cusdashboard/cusdashboard.component';
import { CusloginComponent } from './cuslogin/cuslogin.component';
import { CusprofileComponent } from './cusprofile/cusprofile.component';
import { CussideNavComponent } from './cusside-nav/cusside-nav.component';
import { CussignupComponent } from './cussignup/cussignup.component';
import { HomeComponent } from './home/home.component';
import { InquiryComponent } from './inquiry/inquiry.component';

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
    path:"home/customer/signup",
    component:CussignupComponent
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
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

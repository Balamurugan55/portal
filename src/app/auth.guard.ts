import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CusporserviceService } from './cusporservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private serv:CusporserviceService){}
  canActivate()
  {
    if(this.serv.loggedin())
    {
      return true;
    }
    else
    {
       this.router.navigate(['home/customer/']);
       return false;
    }
  }
  
}

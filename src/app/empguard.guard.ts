import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpporserviceService } from './empporservice.service';

@Injectable({
  providedIn: 'root'
})
export class EmpguardGuard implements CanActivate {
  constructor(private router: Router,private serv:EmpporserviceService){}
  canActivate()
  {
    if(this.serv.loggedin())
    {
      return true;
    }
    else
    {
       this.router.navigate(['home/employee/']);
       return false;
    }
  }
  
}

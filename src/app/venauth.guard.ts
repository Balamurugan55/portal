import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { VenporserviceService } from './venporservice.service';

@Injectable({
  providedIn: 'root'
})
export class VenauthGuard implements CanActivate {
  constructor(private router: Router,private serv:VenporserviceService){}
  canActivate()
  {
    if(this.serv.loggedin())
    {
      return true;
    }
    else
    {
       this.router.navigate(['home/vendor/']);
       return false;
    }
  }
  
}

import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterService implements HttpInterceptor {

  constructor() { }
  static stype:any;
  tokreq:any;
  intercept(req:any,next:any)
  {
    console.log(TokenInterService.stype);
    if(TokenInterService.stype ==='C')
    {
     this.tokreq=req.clone({setHeaders: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
    }
    else if(TokenInterService.stype === 'V'){
      this.tokreq=req.clone({setHeaders: {Authorization: `Bearer ${localStorage.getItem('ventoken')}`}});
    }
    else if(TokenInterService.stype === 'E'){
      this.tokreq=req.clone({setHeaders: {Authorization: `Bearer ${localStorage.getItem('emptoken')}`}});
    }
     return next.handle(this.tokreq);
  }
}

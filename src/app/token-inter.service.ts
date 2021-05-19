import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterService implements HttpInterceptor {

  constructor() { }
  intercept(req:any,next:any)
  {
     let tokreq=req.clone({setHeaders: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
     return next.handle(tokreq);
  }
}

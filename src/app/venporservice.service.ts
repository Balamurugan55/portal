import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VenporserviceService {
  url='http://localhost:3000/venporauth';
  constructor(private http:HttpClient,private router:Router) { }
  body={venid:'2'};
  get_venauth(body:any)
  {
    return this.http.post(this.url,body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  getspecial()
  {
    return this.http.get(this.url+"/special")
  }
  loggedin()
  {
    return !!localStorage.getItem('ventoken');
  }
  logout()
  {
    localStorage.removeItem('ventoken');
    this.router.navigate(['home/vendor']);
  }
  get_venprof()
  {
    console.log(this.body);
    return this.http.post(this.url+"/venprofile",this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  savedetails(body:any){
    return this.http.post(this.url+'/vensave',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}

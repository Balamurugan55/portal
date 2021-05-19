import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CusporserviceService {
  url='http://localhost:3000/cusporauth';
  constructor(private http:HttpClient,private router:Router) { }
  body:any={cusid:'11'};
  body1:any={cusid:'11',doctype:'0'};
  get_Auth(body:any)
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
    return !!localStorage.getItem('token');
  }
  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['home/customer']);
  }
  get_cusprof()
  {
    console.log(this.body);
    return this.http.post(this.url+"/cusprofile",this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_cussale()
  {
    console.log(JSON.stringify(this.body1));
      return this.http.post(this.url+"/inquiry",JSON.stringify(this.body1),{
        observe:'body',
        headers:new HttpHeaders().append('Content-Type', 'application/json')
      });
  }
}

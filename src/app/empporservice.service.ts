import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpporserviceService {
  url='http://localhost:3000/empporauth';
  constructor(private http:HttpClient,private router:Router) { }
  body={empid:'10067'};
  static token:any;
  static empname=new BehaviorSubject('dummy');
  static istouched:any=false;
  empnameob$=EmpporserviceService.empname.asObservable();
  get_empauth(body:any)
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
    return !!(EmpporserviceService.token);
  }
  logout()
  {
    localStorage.removeItem('emptoken');
    EmpporserviceService.token =null;
    this.router.navigate(['home/employee']);
  }
  get_empprof()
  {
    console.log(this.body);
    return this.http.post(this.url+"/empprofile",this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  savedetails(body:any){
    return this.http.post(this.url+'/empsave',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_empldet(){
    return this.http.post(this.url+"/empldet",this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_emppay(){
    return this.http.post(this.url+"/emppay",this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_empltype(){
    return this.http.post(this.url+"/empltype",this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  create_leave(body:any){
    return this.http.post(this.url+'/emplreq',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_empfset(){
    return this.http.post(this.url+"/empfset",this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CusporserviceService {
  url='http://localhost:3000/cusporauth';
  constructor(private http:HttpClient,private router:Router) { }
  body:any={cusid:'11'};
  body1:any={cusid:'11',doctype:'0'};
  body2:any={saledoc:'10000048'};
  static cusname=new BehaviorSubject('dummy');
  cusnameob$=CusporserviceService.cusname.asObservable();
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
  get_inqdata()
  {
    console.log(JSON.stringify(this.body2));
    return this.http.post(this.url+'/inqdata',JSON.stringify(this.body2),{
      observe:'body',
        headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_cuscredit()
  {
    return this.http.post(this.url+'/cuscredit',this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_cussaleor()
  {
    return this.http.post(this.url+'/cussaleor',this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_cusdeli()
  {
    return this.http.post(this.url+'/cusdeli',this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  savedetails(body:any){
    return this.http.post(this.url+'/cussave',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  get_cuspayage(){
    return this.http.post(this.url+'/cuspayage',this.body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  uploadfile(fd:any){
    return this.http.post(this.url+'/cusmasup',fd,{
      reportProgress:true,
      observe:'events'
    });
  }
  get_cusid(body:any){
    return this.http.post(this.url+'/cussignup',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}

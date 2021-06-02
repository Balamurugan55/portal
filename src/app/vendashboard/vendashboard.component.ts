import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { VenporserviceService } from '../venporservice.service';
import { Router } from '@angular/router';
import { TokenInterService } from '../token-inter.service';

@Component({
  selector: 'app-vendashboard',
  templateUrl: './vendashboard.component.html',
  styleUrls: ['./vendashboard.component.css']
})
export class VendashboardComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
      events:any;
      isdisplay2:any;
      isdisplay1:any;
  constructor(private breakpointObserver: BreakpointObserver,private serv:VenporserviceService,private router:Router) {}
  ngOnInit(): void {
    TokenInterService.stype='V';
    this.serv.getspecial().subscribe(
      (res)=>{ this.events = res},
      err=>{ 
        if(err instanceof HttpErrorResponse)
        {
          if(err.status === 401 || err.status === 500)
          {
            this.router.navigate(['home/vendor']);
          }
        }
      }
    );
}

  logout()
  {
   this.serv.logout();
  }
  display1(){
    this.isdisplay1=!this.isdisplay1;
  }
  display2(){
    this.isdisplay2=!this.isdisplay2;
  }


}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LogoutdialogComponent } from '../logoutdialog/logoutdialog.component';
import { TokenInterService } from '../token-inter.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { EmpporserviceService } from '../empporservice.service';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent {

  isdisplay1:any=false;
  isdisplay2:any=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    events:any;
    empname:any;
    
  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private serv:EmpporserviceService,private dialog:MatDialog) {}
  ngOnInit(): void {
    this.serv.empnameob$.subscribe(res=>{
      this.empname=res;
  });
    TokenInterService.stype='E';
    this.serv.getspecial().subscribe(
      (res)=>{ this.events = res},
      err=>{ 
        if(err instanceof HttpErrorResponse)
        {
          if(err.status === 401 || err.status === 500)
          {
            this.router.navigate(['home/employee/']);
          }
        }
      }
    );
}


logout()
{
  this.dialog.open(LogoutdialogComponent).afterClosed().subscribe(res=>{
    console.log(res);
    if(res==='true'){
      this.serv.logout();
    }
  });
 
}
  display1(){
    this.isdisplay1=!this.isdisplay1;
  }
  display2(){
    this.isdisplay2=!this.isdisplay2;
  }
  home(){
    this.dialog.open(LogoutdialogComponent).afterClosed().subscribe(res=>{
      console.log(res);
      if(res==='true'){
        this.serv.logout();
        this.router.navigate(['home']);
      }
    });
    
  }


}

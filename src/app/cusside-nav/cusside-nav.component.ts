import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CusporserviceService } from '../cusporservice.service';
import { OnInit } from '@angular/core';
import { TokenInterService } from '../token-inter.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutdialogComponent } from '../logoutdialog/logoutdialog.component';

@Component({
  selector: 'app-cusside-nav',
  templateUrl: './cusside-nav.component.html',
  styleUrls: ['./cusside-nav.component.css']
})
export class CussideNavComponent  implements OnInit{
  isdisplay1:any=false;
  isdisplay2:any=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    events:any;
    cusname:any;
  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private serv:CusporserviceService,private dialog:MatDialog) {}
  ngOnInit(): void {
    this.serv.cusnameob$.subscribe(res=>{
      this.cusname=res;
  });
    TokenInterService.stype='C';
    this.serv.getspecial().subscribe(
      (res)=>{ this.events = res},
      err=>{ 
        if(err instanceof HttpErrorResponse)
        {
          if(err.status === 401 || err.status === 500)
          {
            this.router.navigate(['home/customer/']);
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

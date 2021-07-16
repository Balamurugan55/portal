import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CusporserviceService } from '../cusporservice.service';
import { EmpporserviceService } from '../empporservice.service';
import { LogoutdialogComponent } from '../logoutdialog/logoutdialog.component';
import { TokenInterService } from '../token-inter.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: "Hydrogen", weight: 1.0079, symbol: 'H'},
  {position: 2, name: "Helium", weight: 4.0026, symbol: 'He'},
  {position: 3, name: "Lithium", weight: 6.941, symbol: 'Li'},
  {position: 4, name: "Beryllium", weight: 9.0122, symbol: 'Be'},
  {position: 5, name: "Boron", weight: 10.811, symbol: 'B'},
  {position: 6, name: "Carbon", weight: 12.0107, symbol: 'C'},
  {position: 7, name: "Nitrogen", weight: 14.0067, symbol: 'N'},
  {position: 8, name: "Oxygen", weight: 15.9994, symbol: 'O'},
  {position: 9, name: "Fluorine", weight: 18.9984, symbol: 'F'},
  {position: 10, name: "Neon", weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-cusdashboard',
  templateUrl: './cusdashboard.component.html',
  styleUrls: ['./cusdashboard.component.css']
})
export class CusdashboardComponent implements OnInit {
  isdisplay1:any=false;
  isdisplay2:any=false;
    events:any;
    empname:any;
    element:any;
    
  constructor(private router:Router,private serv:EmpporserviceService,private dialog:MatDialog) {}
  ngOnInit(): void {
    this.serv.empnameob$.subscribe(res=>{
      this.empname=res;
     
  });
  this.chatbot();
    TokenInterService.stype='E';
    // this.serv.getspecial().subscribe(
    //   (res)=>{ this.events = res},
    //   err=>{ 
    //     if(err instanceof HttpErrorResponse)
    //     {
    //       if(err.status === 401 || err.status === 500)
    //       {
    //         this.router.navigate(['home/employee/']);
    //       }
    //     }
    //   }
    // );
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
chatbot(){
  this.element = document . createElement ( 'script' ); 
this.element . setAttribute ( 'src' , 'https://cdn.cai.tools.sap/webchat/webchat.js' );
this.element . setAttribute ( 'channelId' , 'f3bc77e5-b460-42d5-b8a4-cd686e8d66cf' );
this.element . setAttribute ( 'token' , '59b6373fbc3bb3a242ccf6284234ac2c' );
this.element . setAttribute ( 'id' , 'cai-webchat' ); 
document .body.appendChild ( this.element );
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

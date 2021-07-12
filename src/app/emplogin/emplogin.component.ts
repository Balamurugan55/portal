import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpporserviceService } from '../empporservice.service';
import { TokenInterService } from '../token-inter.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit,OnDestroy {
  hide:any = true;
  signin:any=true;
  body:any;
  res:any;
  obser:any;
  isprogress:any=false;
  element:any;
  myobj:any;
  constructor(private router:Router,private ser:EmpporserviceService) { }

  ngOnInit(): void {
    console.log(EmpporserviceService.token);
      TokenInterService.stype='E';
    this.chatbot();
  }
//   ngOnDestroy(){
//     this.obser.unsubscribe();
// }
  ngOnDestroy(){
    this.myobj=document.getElementById("cai-webchat");
    this.myobj.remove();
 }
  onsubmit(loginform:NgForm)
  {
    this.isprogress=true;
    this.body=JSON.stringify(loginform.value);
    console.log(this.body);
    this.obser=this.ser.get_empauth(this.body).subscribe((data) => {
      this.res=data;
      console.log(this.res);
      localStorage.setItem('emptoken',this.res.tok);
      EmpporserviceService.token=this.res.tok;
      this.router.navigate(['home/employee/empdashboard']);
      this.ser.body.empid=loginform.value.empid;
      EmpporserviceService.empname.next(this.res.name);
      this.isprogress=false;
    // if(data == true)
    // {
    //   this.router.navigate(['home/customer/cusdashboard']);
    // }
    // else
    // {
    //   this.signin=false;
    // }
    },
    (err) => {console.log(err);
      this.isprogress=false;
      this.signin=false;
      setTimeout(() =>{this.signin=true;},3000)
    }
    );
    
    //console.log(loginform.submitted);
    //loginform.resetForm();
  }
  validity(loginform:NgForm)
  {
    if(loginform.value.password.length >=8 && loginform.value.password.length<=12)
    {
        return true;
    }
    return false;
  }
  chatbot(){
    this.element = document . createElement ( 'script' ); 
  this.element . setAttribute ( 'src' , 'https://cdn.cai.tools.sap/webchat/webchat.js' );
  this.element . setAttribute ( 'channelId' , 'f3bc77e5-b460-42d5-b8a4-cd686e8d66cf' );
  this.element . setAttribute ( 'token' , '59b6373fbc3bb3a242ccf6284234ac2c' );
  this.element . setAttribute ( 'id' , 'cai-webchat' ); 
  document .body.appendChild ( this.element );
  }
  check():any{
    
  }
  home()
  {
    this.router.navigate(['home']);
  }
}

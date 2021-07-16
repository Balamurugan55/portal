import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpporserviceService } from '../empporservice.service';
import { TokenInterService } from '../token-inter.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {
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
    if(EmpporserviceService.istouched){
      location.reload();
      EmpporserviceService.istouched=false;
    }
  }
//   ngOnDestroy(){
//     this.obser.unsubscribe();
// }
  
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
  check():any{
    
  }
  home()
  {
    this.router.navigate(['home']);
  }
}

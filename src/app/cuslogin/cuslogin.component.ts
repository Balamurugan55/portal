import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CusporserviceService } from '../cusporservice.service';
import { TokenInterService } from '../token-inter.service';


@Component({
  selector: 'app-cuslogin',
  templateUrl: './cuslogin.component.html',
  styleUrls: ['./cuslogin.component.css']
})
export class CusloginComponent implements OnInit {
  hide:any = true;
  signin:any=true;
  body:any;
  res:any;
  obser:any;
  constructor(private router:Router,private ser:CusporserviceService,private ser1:TokenInterService) { }

  ngOnInit(): void {
      TokenInterService.stype='C';
      //console.log(this.ser1.stype);
  }
//   ngOnDestroy(){
//     this.obser.unsubscribe();
// }
  onsubmit(loginform:NgForm)
  {
    this.body=JSON.stringify(loginform.value);
    console.log(this.body);
    this.obser=this.ser.get_Auth(this.body).subscribe((data) => {
      this.res=data;
      console.log(this.res.tok);
      localStorage.setItem('token',this.res.tok);
      this.router.navigate(['home/customer/cusdashboard']);
      this.ser.body.cusid=loginform.value.cusid;
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
  onclicksignup()
  {
    this.router.navigate(['home/customer/signup']);
  }

}

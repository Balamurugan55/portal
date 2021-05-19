import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CusporserviceService } from '../cusporservice.service';


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
  constructor(private router:Router,private ser:CusporserviceService) { }

  ngOnInit(): void {
      
  }
  onsubmit(loginform:NgForm)
  {
    this.body=JSON.stringify(loginform.value);
    console.log(this.body);
    this.ser.get_Auth(this.body).subscribe((data) => {
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

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenInterService } from '../token-inter.service';
import { VenporserviceService } from '../venporservice.service';

@Component({
  selector: 'app-venlogin',
  templateUrl: './venlogin.component.html',
  styleUrls: ['./venlogin.component.css']
})
export class VenloginComponent implements OnInit {
  hide:any = true;
  signin:any=true;
  body:any;
  res:any;
  obser:any;
  constructor(private router:Router,private ser:VenporserviceService) { }

  ngOnInit(): void {
      TokenInterService.stype='V';
  }
//   ngOnDestroy(){
//     this.obser.unsubscribe();
// }
  onsubmit(loginform:NgForm)
  {
    this.body=JSON.stringify(loginform.value);
    console.log(this.body);
    this.obser=this.ser.get_venauth(this.body).subscribe((data) => {
      this.res=data;
      console.log(this.res.tok);
      localStorage.setItem('ventoken',this.res.tok);
      this.router.navigate(['home/vendor/vendashboard']);
      this.ser.body.venid=loginform.value.venid;
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
    this.router.navigate(['home/vendor/signup']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CusporserviceService } from '../cusporservice.service';
import { TokenInterService } from '../token-inter.service';

@Component({
  selector: 'app-cussignup',
  templateUrl: './cussignup.component.html',
  styleUrls: ['./cussignup.component.css']
})
export class CussignupComponent implements OnInit {
  data:any;
  iserror:any=false;
  issuccess:any=false;
  cusid:any;
  isprogress:any=false;
  constructor(private ser:CusporserviceService) { }

  ngOnInit(): void {
    TokenInterService.stype='C';
  }
  onsubmit(regform:NgForm){
    this.isprogress=true;
    console.log(JSON.stringify(regform.value));
    this.ser.get_cusid(regform.value).subscribe(res=>{
      this.data=res;
      if(this.data.cusid){
            this.issuccess=true;
            this.cusid=this.data.cusid;
      }
      else{
            this.iserror=true;
            setTimeout(()=>{this.iserror=false;},3000)
      }
      this.isprogress=false;
    },err=>{console.log(err);
    this.isprogress=false;
    });
    
  }
  validity(regform:NgForm):any{
    if(regform.value.password === regform.value.confirm && regform.value.password.length >=8 && regform.value.password.length<=12){
      return true
    }
    return false
  }


}

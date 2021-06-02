import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CusporserviceService } from '../cusporservice.service';

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
  constructor(private ser:CusporserviceService) { }

  ngOnInit(): void {
  }
  onsubmit(regform:NgForm){
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
    },err=>{console.log(err);});
  }
  validity(regform:NgForm):any{
    if(regform.value.password === regform.value.confirm && regform.value.password.length >=8 && regform.value.password.length<=12){
      return true
    }
    return false
  }


}

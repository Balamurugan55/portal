import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-cusprofile',
  templateUrl: './cusprofile.component.html',
  styleUrls: ['./cusprofile.component.css']
})
export class CusprofileComponent implements OnInit {
  isedit1:any=false;
  isedit2:any=false;
  isedit3:any=false;
  isedit4:any=false;
  isedit5:any=false;
  isedit6:any=false;
  isedit7:any=false;
  isedit8:any=false;
  isedit9:any=false;
  cusid:any;
  cusname:any;
  cusmail:any;
  contno:any;
  cusstreet:any;
  cuscity:any;
  cusregion:any;
  cuscountry:any;
  cuscode:any;
  result:any;
  constructor(private serv:CusporserviceService) { }

  ngOnInit(): void {
      this.serv.get_cusprof().subscribe(res => {
        console.log(res);
        this.result=res;
        this.cusid=this.result.cusid;
        this.cusmail=this.result.cusmail;
        this.contno=this.result.contno;
        this.cuscity=this.result.cuscity;
        this.cuscountry=this.result.cuscountry;
        this.cuscode=this.result.cuspost;
        this.cusname=this.result.cusname;
        this.cusregion=this.result.RETURN.MESSAGE_V1;
        this.cusstreet=this.result.RETURN.MESSAGE_V2;
      },
      err=>{console.log(err)}
      );
  }
  onsubmit(profile:NgForm)
  {
      //this.isedit=false;
  }
  edit1()
  {
    this.isedit1=true;
    console.log(this.cusid);
  }
  edit2()
  {
    this.isedit2=true;
  }
  edit3()
  {
    this.isedit3=true;
  }
  edit4()
  {
    this.isedit4=true;
  }
  edit5()
  {
    this.isedit5=true;
  }
  edit6()
  {
    this.isedit6=true;
  }
  edit7()
  {
    this.isedit7=true;
  }
  edit8()
  {
    this.isedit8=true;
  }
  edit9()
  {
    this.isedit9=true;
  }

}

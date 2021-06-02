import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-cusprofile',
  templateUrl: './cusprofile.component.html',
  styleUrls: ['./cusprofile.component.css']
})
export class CusprofileComponent implements OnInit {
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
  body:any;
  issaved:any=false;
  isnotsaved:any=false;
  data:any;
  obser:any;
  obser1:any;
  constructor(private serv:CusporserviceService) { }

  ngOnInit(): void {
      this.obser=this.serv.get_cusprof().subscribe(res => {
        console.log(res);
        this.result=res;
        this.cusid=this.result.cusid;
        this.cusmail=this.result.cusmail;
        this.contno=this.result.contno;
        this.cuscity=this.result.cuscity;
        this.cuscountry=this.result.cuscountry;
        this.cuscode=this.result.cuspost;
        this.cusname=this.result.cusname;
        this.cusregion=this.result.RETURN.MESSAGE_V2;
        this.cusstreet=this.result.RETURN.MESSAGE_V1;
      },
      err=>{console.log(err)}
      );
  }
//   ngOnDestroy(){
//     this.obser.unsubscribe();
//     this.obser1.unsubscribe();
// }
  onsubmit(profile:NgForm)
  {
      console.log(this.cuscountry);
      this.body={cusid:this.cusid,
        cusname:this.cusname,
        cusmail:this.cusmail,
        contno:this.contno,
        cusstreet:this.cusstreet,
        cuscity:this.cuscity,
        cusregion:this.cusregion,
        cuscountry:this.cuscountry,
        cuscode:this.cuscode
      };
      console.log(this.body);
      this.obser1=this.serv.savedetails(this.body).subscribe(res=>{
        this.data=res;
        if(this.data.TYPE==='S')
        {
              this.issaved=true;
              setTimeout(()=>{this.issaved=false},3000);
        }
        else{
          this.isnotsaved=true;
          setTimeout(()=>{this.isnotsaved=false},3000);
        }
      },err=>{console.log(err)});
      this.isedit2=false;
      this.isedit3=false;
      this.isedit4=false;
      this.isedit5=false;
      this.isedit6=false;
      this.isedit7=false;
      this.isedit8=false;
      this.isedit9=false;
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

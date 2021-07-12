import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpporserviceService } from '../empporservice.service';

@Component({
  selector: 'app-empprof',
  templateUrl: './empprof.component.html',
  styleUrls: ['./empprof.component.css']
})
export class EmpprofComponent implements OnInit {
  isedit1:any=false;
  isedit2:any=false;
  isedit3:any=false;
  isedit4:any=false;
  isedit5:any=false;
  isedit6:any=false;
  isedit7:any=false;
  isedit8:any=false;
  isedit9:any=false;
  empid:any;
  fname:any;
  lname:any;
  district:any;
  contno:any;
  street:any;
  city:any;
  region:any;
  country:any;
  postcode:any;
  mailid:any;
  result:any;
  body:any;
  issaved:any=false;
  isnotsaved:any=false;
  data:any;
  obser:any;
  obser1:any;
  isprogress1:any=false;
  isprogress2:any=false;
  constructor(private serv:EmpporserviceService) { }

  ngOnInit(): void {
    
      this.isprogress1=true;
      this.obser=this.serv.get_empprof().subscribe(res => {
        console.log(res);
        this.result=res;
        this.empid=this.result.EMPID;
        this.contno=this.result.TELEPHONE;
        this.city=this.result.CITY;
        this.country=this.result.COUNTRY;
        this.postcode=this.result.POSTCODE;
        this.fname=this.result.FNAME;
        this.lname=this.result.LNAME;
        this.district=this.result.DISTRICT;
        this.region=this.result.REGION;
        this.street=this.result.STREET;
        this.mailid=this.result.MAILID;
        this.isprogress1=false;
      },
      err=>{console.log(err);this.isprogress1=false;}
      );
  }
//   ngOnDestroy(){
//     this.obser.unsubscribe();
//     this.obser1.unsubscribe();
// }
  onsubmit(profile:NgForm)
  {
      this.isprogress2=true;
      console.log(this.country);
      this.body={empid:this.empid,
        fname:this.fname,
        lname:this.lname,
        contno:this.contno,
        mailid:this.mailid,
        street:this.street,
        city:this.city,
        district:this.district,
        region:this.region,
        country:this.country,
        postcode:this.postcode
      };
      console.log(this.body);
      this.obser1=this.serv.savedetails(this.body).subscribe(res=>{
        this.data=res;
        if(this.data.TYPE==='S')
        {
              this.issaved=true;
              setTimeout(()=>{this.issaved=false},3000);
              EmpporserviceService.empname.next(this.fname);
        }
        else{
          this.isnotsaved=true;
          setTimeout(()=>{this.isnotsaved=false},3000);
        }
      this.isprogress2=false;
      },err=>{console.log(err);this.isprogress2=false;});
      
      this.isedit1=false;
      this.isedit2=false;
      this.isedit3=false;
      this.isedit4=false;
      this.isedit5=false;
      this.isedit6=false;
      this.isedit7=false;
      this.isedit8=false;
      this.isedit9=false;
  }
  edit1()
  {
    this.isedit1=true;
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

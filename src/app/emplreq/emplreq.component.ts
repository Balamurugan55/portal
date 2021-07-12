import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpporserviceService } from '../empporservice.service';
import * as moment from 'moment';
@Component({
  selector: 'app-emplreq',
  templateUrl: './emplreq.component.html',
  styleUrls: ['./emplreq.component.css']
})
export class EmplreqComponent implements OnInit {
  iscreated:any=false;
  isnotcreated:any=false;
  empid:any;
  stime:any="00:00:00";
  etime:any="00:00:00";
  ahours:any;
  ltype:any;
  data:any;
  selected:any;
  isprogress1:any;
  isprogress2:any;
  emessage:any;
  sdate:any;
  edate:any;
  ltyp:any;
  body:any;
  constructor(private ser:EmpporserviceService) { }

  ngOnInit(): void {
    this.isprogress1=true;
    this.empid=this.ser.body.empid;
    this.ser.get_empltype().subscribe(res=>{
      this.data=res;
      if(this.data.LTYPE.length!=0){
          this.ltype=this.data.LTYPE;
      }
      this.isprogress1=false;
    });
  }
  onsubmit(ldet:NgForm){
    this.isprogress2=true;
    this.body={empid:this.empid,
      ltype:this.selected,
      sdate:this.sdate,
      edate:this.edate,
      stime:this.stime,
      etime:this.etime,
      ahours:this.ahours
    };
    console.log(this.body);
    this.ser.create_leave(this.body).subscribe(res=>{
      this.data=res;
      if(this.data.TYPE==='S')
      {
            this.iscreated=true;
            setTimeout(()=>{this.iscreated=false},3000);
      }
      else{
        this.isnotcreated=true;
        this.emessage=this.data.EMESSAGE;
        setTimeout(()=>{this.isnotcreated=false},3000);
      }
    this.isprogress2=false;
    },err=>{console.log(err);this.isprogress2=false;});
  }
  setsdate(sdate:any){
    console.log(sdate.value);
    this.sdate=moment(sdate.value).format('YYYY-MM-DD');
  }
  setedate(edate:any){
    console.log(edate.value);
    this.edate=moment(edate.value).format('YYYY-MM-DD');
  }

}

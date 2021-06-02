import { Component, OnInit } from '@angular/core';
import { CusporserviceService } from '../cusporservice.service';
import {SubscriptionLike} from "rxjs";

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  salesdoc:any;
  selected:any;
  data:any;
  isavailable:any=false;
  isavailable1:any=false;
  header:any=[];
  line:any=[];
  toggle:any;
  obser1:any;
  obser2:any;
  istoggle1:any=true;
  istoggle2:any=true;
  displayedColumns:any=['OPER','REC_DATE','REC_TIME','CREATED_BY','DOC_DATE','TRAN_GROUP','DOC_TYPE','NET_VAL','CURRENCY','SALES_ORG'];
  displayedColumns1:any=['DOC_NUMBER','ITM_NUMBER','MATERIAL','MAT_ENTRD','MATL_GROUP','SHORT_TEXT','ITEM_CATEG','ORDER_PROB','CREAT_DATE','CREATED_BY'];
  constructor(private ser:CusporserviceService) { }
  
  ngOnInit(): void {
    this.ser.body1.doctype='A';
    this.ser.body1.cusid=this.ser.body.cusid;
    this.obser1=this.ser.get_cussale().subscribe(data =>{
      this.salesdoc=data;
      console.log(this.salesdoc);
    },err =>{console.log(err)});
  }
  getdetails(){
    console.log(this.selected);
    this.line=[];
    this.header=[];
    this.ser.body2.saledoc=this.selected;
    this.obser2=this.ser.get_inqdata().subscribe(res => {
      this.data = res;
      console.log(this.data);
      console.log(this.data.RETURN.length);
      if (this.data.RETURN.length === 0) {
        //console.log(this.data.includes('RETURN'));
        this.line = this.data.LINEITEMS;
        this.header=this.data.headers;
        if (this.header.length != 0) {
          this.isavailable = true;
        }

        else {
          this.isavailable = false;
        }
        if (this.line.length != 0) {
          this.isavailable1 = true;
        }

        else {
          this.isavailable1 = false;
        }
      }
      else {
        this.isavailable = false;
        this.isavailable1 = false;
      }
      console.log(this.line);
      console.log(this.header);
    },err=>{console.log(err)});
  }
  dotoggle(){
    if(this.toggle==='header'){
        this.istoggle1=true;
        this.istoggle2=false;
    }
    else if(this.toggle==='line'){
      this.istoggle1=false;
      this.istoggle2=true;
    }
    else{
      this.istoggle1=true;
      this.istoggle2=true;
    }
  }

}

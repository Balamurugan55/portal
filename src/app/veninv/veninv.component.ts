import { Component, OnInit } from '@angular/core';
import { VenporserviceService } from '../venporservice.service';

@Component({
  selector: 'app-veninv',
  templateUrl: './veninv.component.html',
  styleUrls: ['./veninv.component.css']
})
export class VeninvComponent implements OnInit {
  veninv1:any="no data";
  data:any;
  invhead:any;
  selected:any;
  body:any;
  isprogress2:any=false;
  isprogress1:any=false;
  isavailable:any=false;
  isavailable1:any=false;
  index:any=-1;
  displayedColumns:any=['INV_NO','FISC_YEAR','PSTNG_DATE','DOC_DATE','ENTRY_DATE','ENTRY_TIME','COMP_CODE','GROSS_AMNT','CURRENCY','INVOICE_STATUS']
  constructor(private ser:VenporserviceService) { }

  ngOnInit(): void {
    this.isprogress2=true;
    this.isavailable1=true;
    this.ser.get_veninvhead().subscribe(res=>{
        this.data=res;
        this.invhead=this.data.invoice;
        this.isprogress2=false;
        this.isavailable1=true;

    },err=>{console.log(err);this.isprogress2=false;this.isavailable1=false;});
  }
  invoicepdf(item:any){
    this.isprogress1=true;
    this.isavailable=true;
    this.body={
      venid:this.ser.body.venid,
      inv_no:item.INV_NO,
      fin_yr:item.FISC_YEAR
    };
    this.ser.get_veninv(this.body).subscribe(res=>{
      this.data=res
      this.veninv1=this.data.pdf;
      this.isprogress1=false;
      this.isavailable=true;
    },err=>{console.log(err);this.isprogress1=false;this.isavailable=false;});
  }
  mouse(ind:any){
    this.index=ind;
  }
  mouseout(){
    this.index=-1;
  }
}

import { Component, OnInit } from '@angular/core';
import { VenporserviceService } from '../venporservice.service';

@Component({
  selector: 'app-venpayage',
  templateUrl: './venpayage.component.html',
  styleUrls: ['./venpayage.component.css']
})
export class VenpayageComponent implements OnInit {

  isavailable:any=false;
  payage:any=[];
  data:any;
  isprogress2:any=false;
  displayedColumns:any=['COMP_CODE','ITEM_NUM','BLINE_DATE','FISC_YEAR','DOC_NO','DOC_DATE','LC_AMOUNT','CURRENCY','PSTNG_DATE','AGE'];
  constructor(private ser:VenporserviceService) { }

  ngOnInit(): void {
      this.isprogress2=true;
      this.isavailable=true;
      this.ser.get_venpayage().subscribe(res=>{
        this.data=res;
        console.log(this.data);
        if(this.data.PAYAGE.length===0)
        {
          this.isavailable=false;
        }
        else{
          this.payage=this.data.PAYAGE;
          this.isavailable=true;
        }
        this.isprogress2=false;
      },err=>{console.log(err);this.isprogress2=false;});
  }
}

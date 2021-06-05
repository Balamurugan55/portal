import { Component, OnInit } from '@angular/core';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-cuspayage',
  templateUrl: './cuspayage.component.html',
  styleUrls: ['./cuspayage.component.css']
})
export class CuspayageComponent implements OnInit {
  isavailable:any=false;
  payage:any=[];
  data:any;
  isprogress2:any=false;
  displayedColumns:any=['COMP_CODE','ITEM_NUM','ALLOC_NMBR','FISC_YEAR','DOC_NO','DOC_DATE','LC_AMOUNT','CURRENCY','PSTNG_DATE','AGE'];
  constructor(private ser:CusporserviceService) { }

  ngOnInit(): void {
      this.isprogress2=true;
      this.isavailable=true;
      this.ser.get_cuspayage().subscribe(res=>{
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
      },err=>{console.log(err);
        this.isprogress2=false;
        this.isavailable=false;
      });
  }

}

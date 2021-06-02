import { Component, OnInit } from '@angular/core';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-cuscredit',
  templateUrl: './cuscredit.component.html',
  styleUrls: ['./cuscredit.component.css']
})
export class CuscreditComponent implements OnInit {
  isavailable:any=false;
  isavailable1:any=false;
  credit:any=[];
  debit:any=[];
  data:any;
  toggle:any;
  istoggle1:any=true;
  istoggle2:any=true;
  obser:any;
  displayedColumns:any=['COMP_CODE','ITEM_NUM','ALLOC_NMBR','FISC_YEAR','DOC_NO','DOC_DATE','LC_AMOUNT','CURRENCY','PSTNG_DATE','ENTRY_DATE'];
  displayedColumns1:any=['COMP_CODE','ITEM_NUM','ALLOC_NMBR','FISC_YEAR','DOC_NO','DOC_DATE','LC_AMOUNT','CURRENCY','PSTNG_DATE','ENTRY_DATE'];
  constructor(private ser:CusporserviceService) { }

  ngOnInit(): void {
      this.obser=this.ser.get_cuscredit().subscribe(res=>{
        this.data=res;
        if(this.data.CREDIT.length===0)
        {
          this.isavailable=false;
        }
        else{
          this.credit=this.data.CREDIT;
          this.isavailable=true;
        }
        if(this.data.DEBIT.length===0)
        {
          this.isavailable1=false;
        }
        else{
          this.debit=this.data.DEBIT;
          this.isavailable1=true;
        }
      },err=>{console.log(err)});
  }
  // ngOnDestroy(){
  //   this.obser.unsubscribe();
  // }
  dotoggle(){
    if(this.toggle==='credit'){
        this.istoggle1=true;
        this.istoggle2=false;
    }
    else if(this.toggle==='debit'){
      this.istoggle1=false;
      this.istoggle2=true;
    }
    else{
      this.istoggle1=true;
      this.istoggle2=true;
    }
  }

}

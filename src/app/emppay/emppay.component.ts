import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogemppayComponent } from '../dialogemppay/dialogemppay.component';
import { EmpporserviceService } from '../empporservice.service';

@Component({
  selector: 'app-emppay',
  templateUrl: './emppay.component.html',
  styleUrls: ['./emppay.component.css']
})
export class EmppayComponent implements OnInit {
    isavailable:any=false;
    isavailable1:any=false;
    header:Array<any>=[];
    line:any=[];
    paydet:any=[];
    paypdf:any=[];
    selected:any;
    index:any=-1;
    index1:any=-1;
    data:any;
    toggle:any;
    istoggle1:any=true;
    istoggle2:any=true;
    obser:any;
    payslip:any;
    isprogress2:any=false;
    displayedColumns:any=['col1','col2','col3','col4','col5','col6','col7','col8','col9','col10'];
    //displayedColumns1:any=['DOC_NO','DOC_ITEM','DESCRIPTION','MATERIAL','PUR_MAT','CO_CODE','PLANT','MAT_GRP','QUANTITY','UNIT'];
    constructor(private ser:EmpporserviceService,private dialog:MatDialog) { }
  
    ngOnInit(): void {
      this.isprogress2=true;
      this.isavailable=true;
      this.obser=this.ser.get_emppay().subscribe(res=>{
        this.data=res;
        if(this.data.PAYDET.length===0)
        {
            this.isavailable=false;
        }
        else{
          this.paydet=this.data.PAYDET;
          this.isavailable=true;
        }
        if(this.data.PAYPDF.length===0)
        {
            this.isavailable1=false;
        }
        else{
          this.paypdf=this.data.PAYPDF;
          
        }
        this.isprogress2=false;
      },err=>{console.log(err);
        this.isprogress2=false;
        this.isavailable=false;
      });
    }
  //   ngOnDestroy(){
  //     this.obser.unsubscribe();
  // }
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
    mouse(ind:any){
      this.index=ind;
    }
    mouse1(ind:any){
      this.index1=ind;
    }
    mouseout(){
      this.index=-1;
    }
    mouseout1(){
      this.index1=-1;
    }
    items(value:any){
      this.payslip=this.paypdf[value];
      this.isavailable1=true;
    }
    dialogpay(value:any){
      this.dialog.open(DialogemppayComponent,{data:this.paypdf[value]});
    }
  }
  

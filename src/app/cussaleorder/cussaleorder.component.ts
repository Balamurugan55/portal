import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CusporserviceService } from '../cusporservice.service';
import { DialogsaleorderComponent } from '../dialogsaleorder/dialogsaleorder.component';
import { LogoutdialogComponent } from '../logoutdialog/logoutdialog.component';

@Component({
  selector: 'app-cussaleorder',
  templateUrl: './cussaleorder.component.html',
  styleUrls: ['./cussaleorder.component.css']
})
export class CussaleorderComponent implements OnInit {
  isavailable:any=false;
  salesorders:any=[];
  item:any;
  data:any;
  selected:any;
  toggle:any;
  istoggle1:any=true;
  istoggle2:any=true;
  obser:any;
  index:any=-1;
  index1:any=-1;
  isprogress1:any=false;
  displayedColumns:any=['SD_DOC','NAME','DOC_DATE','CURRENCY','SALES_ORG','EXCHG_RATE','DIVISION','PLANT','STORE_LOC','SHIP_POINT'];
  displayedColumns1:any=['SD_DOC','ITM_NUMBER','MATERIAL','SHORT_TEXT','DLV_QTY','SALES_UNIT','NET_VAL','DOC_STATUS','CREATION_DATE','CREATION_TIME'];
  constructor(private ser:CusporserviceService,private dialog:MatDialog) { }

  ngOnInit(): void {
      this.isprogress1=true;
      this.isavailable=true;
      this.obser=this.ser.get_cussaleor().subscribe(res=>{
        this.data=res;
        if(this.data.SALESORDERS.length===0) {
          this.isavailable=false;
        }
        else{
          this.salesorders=this.data.SALESORDERS;
          this.isavailable=true;
        }
        this.isprogress1=false;
      },err=>{console.log(err);
        this.isprogress1=false;
        this.isavailable=false;
      });
      
  }
  // ngOnDestroy(){
  //     this.obser.unsubscribe();
  // }
  get_salesorders(){
    console.log(this.selected);
    this.item=this.salesorders.filter((item:any)=>{return item.SD_DOC===this.selected});
    if(this.item.length!=0){
      this.isavailable=true;
    }
    console.log(this.item);
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
      console.log(value);
      this.item=this.salesorders.filter((item:any)=>{return item.SD_DOC===value.SD_DOC});
      this.dialog.open(DialogsaleorderComponent,{data:this.item})
  }

}

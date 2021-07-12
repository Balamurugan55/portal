import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { element } from 'protractor';
import { CusporserviceService } from '../cusporservice.service';
import { DelidialogComponent } from '../delidialog/delidialog.component';
import { LogoutdialogComponent } from '../logoutdialog/logoutdialog.component';

@Component({
  selector: 'app-cusdelivery',
  templateUrl: './cusdelivery.component.html',
  styleUrls: ['./cusdelivery.component.css']
})
export class CusdeliveryComponent implements OnInit {
  isavailable:any=false;
  isavailable1:any=false;
  deliveryheader:any=[];
  deliveryline:any=[];
  header:Array<any>=[];
  line:any=[];
  data:any;
  //salesdoc:any;
  selected:any;
  toggle:any;
  istoggle1:any=true;
  istoggle2:any=true;
  obser:any;
  index:any=-1;
  index1:any=-1;
  isprogress1:any=false;
  displayedColumns:any=['VBELN','VSTEL','WADAT','INCO2','NTGEW','GEWEI','LFART','ERDAT','ERNAM','VKORG'];
  displayedColumns1:any=['VBELN','MATNR','MATWA','ARKTX','NTGEW','GEWEI','MBDAT','LGMNG','ERDAT','ERNAM'];
  constructor(private ser:CusporserviceService,private dialog:MatDialog) { }

  ngOnInit(): void {
    // this.ser.body1.doctype='J';
    // this.ser.body1.cusid=1;
    // this.ser.get_cussale().subscribe(data =>{
    //   this.salesdoc=data;
    //   console.log(this.salesdoc);
    // },err =>{console.log(err)});
    this.isprogress1=true;
    this.isavailable=true;
    this.obser=this.ser.get_cusdeli().subscribe(res=>{
      this.data=res;
      if(this.data.HEADER.length===0)
      {
          this.isavailable=false;
      }
      else{
        this.deliveryheader=this.data.HEADER;
        this.isavailable=true;
      }
      if(this.data.LINE.length===0)
      {
          this.isavailable1=false;
      }
      else{
        this.deliveryline=this.data.LINE;
        //this.isavailable1=true;
      }
      this.isprogress1=false;
    },err=>{console.log(err);this.isprogress1=false;this.isavailable=false;});
  }
//   ngOnDestroy(){
//     this.obser.unsubscribe();
// }
  get_deliveries(){
    console.log(this.selected);
    this.header=this.deliveryheader.filter((item:any)=>{return item.VBELN===this.selected});
    this.line=this.deliveryline.filter((item:any)=>{return item.VBELN===this.selected});
    if(this.header.length!=0){
      this.isavailable=true;
    }
    if(this.line.length!=0){
      this.isavailable1=true;
    }
    console.log(this.line);
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
    this.line=this.deliveryline.filter((item:any)=>{return item.VBELN===value.VBELN});
    this.dialog.open(DelidialogComponent,{data:this.line});
  }

}

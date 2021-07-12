import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PodialogComponent } from '../podialog/podialog.component';
import { VenporserviceService } from '../venporservice.service';

@Component({
  selector: 'app-venpo',
  templateUrl: './venpo.component.html',
  styleUrls: ['./venpo.component.css']
})
export class VenpoComponent implements OnInit {
  isavailable:any=false;
  isavailable1:any=false;
  header:Array<any>=[];
  line:any=[];
  poheader:any=[];
  poline:any=[];
  selected:any;
  index:any=-1;
  index1:any=-1;
  data:any;
  toggle:any;
  istoggle1:any=true;
  istoggle2:any=true;
  obser:any;
  isprogress2:any=false;
  displayedColumns:any=['col1','col2','col3','col4','col5','col6','col7','col8','col9','col10'];
  //displayedColumns1:any=['DOC_NO','DOC_ITEM','DESCRIPTION','MATERIAL','PUR_MAT','CO_CODE','PLANT','MAT_GRP','QUANTITY','UNIT'];
  constructor(private ser:VenporserviceService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.isprogress2=true;
    this.isavailable=true;
    this.obser=this.ser.get_venpo().subscribe(res=>{
      this.data=res;
      if(this.data.HEADER.length===0)
      {
          this.isavailable=false;
      }
      else{
        this.poheader=this.data.HEADER;
        this.isavailable=true;
      }
      if(this.data.LINE.length===0)
      {
          this.isavailable1=false;
      }
      else{
        this.poline=this.data.LINE;
        this.isavailable1=true;
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
  get_gr(){
    console.log(this.selected);
    this.header=this.poheader.filter((item:any)=>{return item.col1===this.selected});
    this.line=this.poline.filter((item:any)=>{return item.col1===this.selected});
    if(this.header.length!=0){
      this.isavailable=true;
    }
    if(this.line.length!=0){
      this.isavailable1=true;
    }
    console.log(this.line);
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
    this.line=this.poline.filter((item:any)=>{return item.col1===value.col1});
    this.dialog.open(PodialogComponent,{data:this.line});
  }
}

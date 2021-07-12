import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GrdialogComponent } from '../grdialog/grdialog.component';
import { VenporserviceService } from '../venporservice.service';

@Component({
  selector: 'app-vengr',
  templateUrl: './vengr.component.html',
  styleUrls: ['./vengr.component.css']
})
export class VengrComponent implements OnInit {

  isavailable:any=false;
  isavailable1:any=false;
  header:Array<any>=[];
  line:any=[];
  grheader:any=[];
  grline:any=[];
  selected:any;
  index:any=-1;
  index1:any=-1;
  data:any;
  toggle:any;
  istoggle1:any=true;
  istoggle2:any=true;
  obser:any;
  isprogress2:any=false;
  displayedColumns:any=['DOC_NO','DOC_YEAR','DOC_DATE','PSTNG_DATE','ENTRY_DATE','USERNAME','TR_EV_TYPE','VERSION','REF_NO','REF'];
  displayedColumns1:any=['DOC_NO','DOC_ITEM','DESCRIPTION','MATERIAL','PUR_MAT','CO_CODE','PLANT','MAT_GRP','QUANTITY','UNIT'];
  constructor(private ser:VenporserviceService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.isprogress2=true;
    this.isavailable=true;
    this.obser=this.ser.get_vengr().subscribe(res=>{
      this.data=res;
      if(this.data.HEADER.length===0)
      {
          this.isavailable=false;
      }
      else{
        this.grheader=this.data.HEADER;
        this.isavailable=true;
      }
      if(this.data.LINE.length===0)
      {
          this.isavailable1=false;
      }
      else{
        this.grline=this.data.LINE;
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
    this.header=this.grheader.filter((item:any)=>{return item.DOC_NO===this.selected});
    this.line=this.grline.filter((item:any)=>{return item.DOC_NO===this.selected});
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
    this.line=this.grline.filter((item:any)=>{return item.DOC_NO===value.DOC_NO});
    this.dialog.open(GrdialogComponent,{data:this.line});
  }
}

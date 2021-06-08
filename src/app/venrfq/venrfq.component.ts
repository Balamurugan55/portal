import { Component, OnInit } from '@angular/core';
import { VenporserviceService } from '../venporservice.service';

@Component({
  selector: 'app-venrfq',
  templateUrl: './venrfq.component.html',
  styleUrls: ['./venrfq.component.css']
})
export class VenrfqComponent implements OnInit {
  isavailable:any=false;
  isavailable1:any=false;
  header:Array<any>=[];
  line:any=[];
  rfqheader:any=[];
  rfqline:any=[];
  selected:any;
  data:any;
  toggle:any;
  index:any=-1;
  index1:any=-1;
  istoggle1:any=true;
  istoggle2:any=true;
  obser:any;
  isprogress2:any=false;
  displayedColumns:any=['DOC_NO','CO_CODE','PUR_ORG','PUR_GRP','CURRENCY','EXCHG_RATE','DOC_DATE','PROCEDURE','CREATED_ON','CREATED_BY'];
  displayedColumns1:any=['DOC_NO','DOC_ITEM','DESCRIPTION','MATERIAL','PUR_MAT','CO_CODE','PLANT','MAT_GRP','QUANTITY','UNIT'];
  constructor(private ser:VenporserviceService) { }

  ngOnInit(): void {
    this.isprogress2=true;
    this.obser=this.ser.get_venrfq().subscribe(res=>{
      this.data=res;
      if(this.data.HEADER.length===0)
      {
          this.isavailable=false;
      }
      else{
        this.rfqheader=this.data.HEADER;
        //this.isavailable=true;
      }
      if(this.data.LINE.length===0)
      {
          this.isavailable1=false;
      }
      else{
        this.rfqline=this.data.LINE;
        //this.isavailable1=true;
      }
      this.isprogress2=false;
    },err=>{console.log(err);this.isprogress2=false;
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
  get_rfq(){
    console.log(this.selected);
    this.header=this.rfqheader.filter((item:any)=>{return item.DOC_NO===this.selected});
    this.line=this.rfqline.filter((item:any)=>{return item.DOC_NO===this.selected});
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
}

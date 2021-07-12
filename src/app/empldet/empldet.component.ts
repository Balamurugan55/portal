import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpporserviceService } from '../empporservice.service';

@Component({
  selector: 'app-empldet',
  templateUrl: './empldet.component.html',
  styleUrls: ['./empldet.component.css']
})
export class EmpldetComponent implements OnInit {
  isavailable:any=false;
  isavailable1:any=false;
  isavailable2:any=false;
 ldet:any=[];
 lquota:any=[];
 rquota:any=[];

  selected:any;
  index:any=-1;
  index1:any=-1;
  index2:any=-1;
  data:any;
  toggle:any;
  istoggle1:any=true;
  istoggle2:any=true;
  istoggle3:any=true;
  obser:any;
  isprogress2:any=false;
  displayedColumns:any=['col1','col2','col3','col4','col5','col6','col7','col8','col9','col10'];
  displayedColumns1:any=['col1','col2','col3','col4','col5','col6','col7','col8','col9','col10'];
  displayedColumns2:any=['col1','col2','col3','col4','col5','col6','col7','col8','col9','col10'];
  //displayedColumns1:any=['DOC_NO','DOC_ITEM','DESCRIPTION','MATERIAL','PUR_MAT','CO_CODE','PLANT','MAT_GRP','QUANTITY','UNIT'];
  constructor(private ser:EmpporserviceService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.isprogress2=true;
    this.isavailable=true;
    this.isavailable1=true;
    this.isavailable2=true;
    this.obser=this.ser.get_empldet().subscribe(res=>{
      this.data=res;
      if(this.data.LDET.length===0)
      {
          this.isavailable=false;
      }
      else{
        this.ldet=this.data.LDET;
        this.isavailable=true;
      }
      if(this.data.LQUOTA.length===0)
      {
          this.isavailable1=false;
      }
      else{
        this.lquota=this.data.LQUOTA;
        this.isavailable1=true;
      }
      if(this.data.RQUOTA.length===0)
      {
          this.isavailable2=false;
      }
      else{
        this.rquota=this.data.RQUOTA;
        this.isavailable2=true;
      }
      this.isprogress2=false;
    },err=>{console.log(err);
      this.isprogress2=false;
      this.isavailable=false;
      this.isavailable1=false;
      this.isavailable2=false;
    });
  }
//   ngOnDestroy(){
//     this.obser.unsubscribe();
// }
  dotoggle(){
    if(this.toggle==='ldet'){
        this.istoggle1=true;
        this.istoggle2=false;
        this.istoggle3=false;
    }
    else if(this.toggle==='lquota'){
      this.istoggle1=false;
      this.istoggle2=true;
      this.istoggle3=false;
    }
    else if(this.toggle==='rquota'){
      this.istoggle1=false;
      this.istoggle2=false;
      this.istoggle3=true;
    }
    else{
      this.istoggle1=false;
      this.istoggle2=false;
      this.istoggle3=false;
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
  mouse2(ind:any){
    this.index2=ind;
  }
  mouseout2(){
    this.index2=-1;
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-grdialog',
  templateUrl: './grdialog.component.html',
  styleUrls: ['./grdialog.component.css']
})
export class GrdialogComponent implements OnInit {
  isavailable:any=false;
  index:any;
  value:any=[];
  displayedColumns:any=['DOC_NO','DOC_ITEM','DESCRIPTION','MATERIAL','PUR_MAT','CO_CODE','PLANT','MAT_GRP','QUANTITY','UNIT'];
  constructor(@Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit(): void {
      if(this.data.length !=0){
          this.isavailable=true;
          this.value=this.data;
      }
  }
  mouse(ind:any){
    this.index=ind;
  }
  mouseout(){
    this.index=-1;
  }
}

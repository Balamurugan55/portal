import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inqdialog',
  templateUrl: './inqdialog.component.html',
  styleUrls: ['./inqdialog.component.css']
})
export class InqdialogComponent implements OnInit {
  isavailable:any=false;
  index:any;
  value:any=[];
  displayedColumns:any=['DOC_NUMBER','ITM_NUMBER','MATERIAL','MAT_ENTRD','MATL_GROUP','SHORT_TEXT','ITEM_CATEG','ORDER_PROB','CREAT_DATE','CREATED_BY'];
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

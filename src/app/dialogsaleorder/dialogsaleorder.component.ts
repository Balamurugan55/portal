import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogsaleorder',
  templateUrl: './dialogsaleorder.component.html',
  styleUrls: ['./dialogsaleorder.component.css']
})
export class DialogsaleorderComponent implements OnInit {
  isavailable:any=false;
  index:any;
  value:any=[];
  displayedColumns:any=['SD_DOC','ITM_NUMBER','MATERIAL','SHORT_TEXT','DLV_QTY','SALES_UNIT','NET_VAL','DOC_STATUS','CREATION_DATE','CREATION_TIME'];
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

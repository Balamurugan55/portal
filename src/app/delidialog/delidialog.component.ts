import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delidialog',
  templateUrl: './delidialog.component.html',
  styleUrls: ['./delidialog.component.css']
})
export class DelidialogComponent implements OnInit {
  isavailable:any=false;
  index:any;
  value:any=[];
  displayedColumns:any=['VBELN','MATNR','MATWA','ARKTX','NTGEW','GEWEI','MBDAT','LGMNG','ERDAT','ERNAM'];
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

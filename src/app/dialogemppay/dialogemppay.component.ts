import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogemppay',
  templateUrl: './dialogemppay.component.html',
  styleUrls: ['./dialogemppay.component.css']
})
export class DialogemppayComponent implements OnInit {
  isavailable:any=false;
  index:any;
  value:any=[];
  //displayedColumns:any=['VBELN','MATNR','MATWA','ARKTX','NTGEW','GEWEI','MBDAT','LGMNG','ERDAT','ERNAM'];
  constructor(@Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit(): void {
      if(this.data!=null){
          this.isavailable=true;
          console.log(this.data);
          this.value=this.data;
      }
  }

}

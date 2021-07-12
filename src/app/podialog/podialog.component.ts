import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-podialog',
  templateUrl: './podialog.component.html',
  styleUrls: ['./podialog.component.css']
})
export class PodialogComponent implements OnInit {
  isavailable:any=false;
  index:any;
  value:any=[];
  displayedColumns:any=['col1','col2','col3','col4','col5','col6','col7','col8','col9','col10'];
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

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notifypo',
  templateUrl: './notifypo.component.html',
  styleUrls: ['./notifypo.component.css']
})
export class NotifypoComponent implements OnInit {
  value:any;
  
  constructor(@Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit(): void {
      if(this.data!=0){
          this.value=this.data;
      }
  }
}

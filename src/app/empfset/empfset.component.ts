import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { EmpporserviceService } from '../empporservice.service';

@Component({
  selector: 'app-empfset',
  templateUrl: './empfset.component.html',
  styleUrls: ['./empfset.component.css']
})
export class EmpfsetComponent implements OnInit {
  isavailable1:any=false;
  isprogress1:any=false;
  data:any;
  constructor(private ser:EmpporserviceService) { }

  ngOnInit(): void {
    this.isprogress1=true;
    this.isavailable1=true;
    this.ser.get_empfset().subscribe(res=>{
      this.data=res;
      if(this.data.TYPE=='E'){
        this.isavailable1=false;
      }
      this.isprogress1=false;
    },er=>{console.log(er);this.isprogress1=false;});
  }

}

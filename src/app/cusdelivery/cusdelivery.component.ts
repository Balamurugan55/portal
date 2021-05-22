import { Component, OnInit } from '@angular/core';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-cusdelivery',
  templateUrl: './cusdelivery.component.html',
  styleUrls: ['./cusdelivery.component.css']
})
export class CusdeliveryComponent implements OnInit {
  isavailable:any=false;
  isavailable1:any=false;
  deliveryheader:any=[];
  deliveryline:any=[];
  data:any;
  // salesdoc:any;
  // selected:any;
  displayedColumns:any=['VBELN','VSTEL','WADAT','INCO2','NTGEW','GEWEI','LFART','ERDAT','ERNAM','VKORG'];
  displayedColumns1:any=['VBELN','MATNR','MATWA','ARKTX','NTGEW','GEWEI','MBDAT','LGMNG','ERDAT','ERNAM'];
  constructor(private ser:CusporserviceService) { }

  ngOnInit(): void {
    // this.ser.body1.doctype='J';
    // this.ser.body1.cusid=1;
    // this.ser.get_cussale().subscribe(data =>{
    //   this.salesdoc=data;
    //   console.log(this.salesdoc);
    // },err =>{console.log(err)});
    this.ser.get_cusdeli().subscribe(res=>{
      this.data=res;
      if(this.data.HEADER.length===0)
      {
          this.isavailable=false;
      }
      else{
        this.deliveryheader=this.data.HEADER;
        this.isavailable=true;
      }
      if(this.data.LINE.length===0)
      {
          this.isavailable1=false;
      }
      else{
        this.deliveryline=this.data.LINE;
        this.isavailable1=true;
      }
    },err=>{console.log(err)});
  }

}
